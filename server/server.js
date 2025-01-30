import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDatabase from "./db/connection.js";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import passport from "./config/passport";
import authRoutes from "./routes/authRoutes";
import { apiLimiter } from "./middleware/rateLimiter.js";

const PORT = process.env.PORT || 5050;
const app = express();

connectDatabase();

app.use(cors());
app.use(express.json());

// Initialize Passport
app.use(passport.initialize());

// Apply rate limiting to all routes
app.use("/api/", apiLimiter);

app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
