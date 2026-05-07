# Portfolio

Proyecto React (Vite) preparado para despliegue en Portainer usando Docker.

## Levantar en Portainer

1. En Portainer, ve a **Stacks** y crea uno nuevo.
2. Usa el archivo `docker-compose.portainer.yml`.
3. Despliega el stack.
4. Accede en `http://TU_SERVIDOR:8080`.

## Levantar local con Docker Compose

```bash
docker compose -f docker-compose.portainer.yml up -d --build
```

## Notas

- La app se sirve con Nginx.
- El enrutado SPA queda cubierto por `nginx.conf` (`try_files ... /index.html`).
- Si usas envío de correo, recuerda que las funciones de Netlify (`/.netlify/functions/*`) no se ejecutan dentro de este contenedor; para producción debes apuntar `VITE_API_URL` a un backend externo.
