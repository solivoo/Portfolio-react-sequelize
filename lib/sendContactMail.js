import nodemailer from 'nodemailer';

export function cleanEnvValue(v) {
  if (v === undefined || v === null) return '';
  return String(v).replace(/\r/g, '').trim();
}

export function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function looksLikeEmail(s) {
  return typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

/**
 * @param {{ name: string, email: string, phone?: string, message: string }} payload
 * @param {Record<string, string | undefined>} [env]
 */
export async function sendContactMail(payload, env = process.env) {
  const { name, email, phone, message } = payload;

  if (!name || !email || !message) {
    const err = new Error('Faltan campos obligatorios (name, email, message).');
    err.statusCode = 400;
    throw err;
  }

  if (!looksLikeEmail(email)) {
    const err = new Error('El email del formulario no es válido.');
    err.statusCode = 400;
    throw err;
  }

  const smtpUser = cleanEnvValue(env.SMTP_USER);
  const smtpPass = cleanEnvValue(env.SMTP_PASS);
  if (!smtpUser || !smtpPass) {
    const err = new Error('Servidor de correo no configurado.');
    err.statusCode = 500;
    throw err;
  }

  if (!looksLikeEmail(smtpUser)) {
    const err = new Error(
      'SMTP_USER en .env debe ser un correo completo (ej. tu_cuenta@gmail.com).',
    );
    err.statusCode = 500;
    throw err;
  }

  const host = cleanEnvValue(env.SMTP_HOST) || 'smtp.gmail.com';
  const useGmail = host.includes('gmail');

  const transporter = useGmail
    ? nodemailer.createTransport({
        service: 'gmail',
        auth: { user: smtpUser, pass: smtpPass },
      })
    : nodemailer.createTransport({
        host,
        port: Number(env.SMTP_PORT || 587),
        secure: env.SMTP_SECURE === 'true',
        auth: { user: smtpUser, pass: smtpPass },
      });

  const rawTo = cleanEnvValue(env.EMAIL_TO) || smtpUser;
  const rawFrom = cleanEnvValue(env.SMTP_FROM) || smtpUser;
  const to = looksLikeEmail(rawTo) ? rawTo : smtpUser;
  const from = looksLikeEmail(rawFrom) ? rawFrom : smtpUser;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone ?? '');
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

  const subjectSafe = `[Portfolio] Mensaje de ${String(name).replace(/[\r\n]+/g, ' ').slice(0, 200)}`;

  await transporter.sendMail({
    from: `"Portfolio" <${from}>`,
    to,
    replyTo: email,
    subject: subjectSafe,
    text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || '-'}\n\n${message}`,
    html: `<p><b>Nombre:</b> ${safeName}</p>
<p><b>Email:</b> ${safeEmail}</p>
<p><b>Teléfono:</b> ${safePhone || '-'}</p>
<p><b>Mensaje:</b></p><p>${safeMessage}</p>`,
  });

  return { ok: true };
}
