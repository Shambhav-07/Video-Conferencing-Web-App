let IS_PROD = false;   // false for local testing

const server = IS_PROD
    ? "https://your-backend-service.onrender.com"  // only domain
    : "http://localhost:8000";  // local backend

export default server;
