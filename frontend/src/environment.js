let IS_PROD = true;   // set false for local testing

const server = IS_PROD
    ? "https://video-conferencing-web-app-ksur.onrender.com"  // Render backend
    : "http://localhost:8000";  // Local backend

export default server;
