import { sendContactMail } from '../../lib/sendContactMail.js';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json', ...corsHeaders },
    body: JSON.stringify(body),
  };
}

function parseBody(event) {
  if (!event.body) return {};
  try {
    return JSON.parse(event.body);
  } catch {
    return {};
  }
}

export const handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' });
  }

  const { name, email, phone, message } = parseBody(event);

  try {
    await sendContactMail({ name, email, phone, message });
    return json(200, { ok: true });
  } catch (err) {
    const status =
      err && typeof err.statusCode === 'number' ? err.statusCode : 500;
    console.error('send-email:', err);
    return json(status, {
      error: err instanceof Error ? err.message : 'Error',
    });
  }
};
