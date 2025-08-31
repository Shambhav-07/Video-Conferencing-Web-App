import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";

import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);

// Attach socket.io
connectToSocket(server);

const PORT = process.env.PORT || 8000;

// Middlewares
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// Routes
app.use("/api/v1/users", userRoutes);

// Start server + Mongo
const start = async () => {
  try {
    const connectionDb = await mongoose.connect(
      "mongodb+srv://VideoConf:KC6JuUuq0I6EjtaB@cluster0.vwmkb9x.mongodb.net/videoconf?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log(`✅ MONGO Connected: ${connectionDb.connection.host}`);

    server.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server + Socket running on PORT ${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

start();
