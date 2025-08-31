let IS_PROD = false;   // 👈 false for local testing

const server = IS_PROD
    ? "https://your-backend-service.onrender.com/api/v1"  // (use this later when you deploy backend)
    : "http://localhost:8000";  // 👈 local backend

export default server;
