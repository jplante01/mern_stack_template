import express from "express";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
// import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

// Task routes
router.get("/", getTasks); // GET /api/tasks
router.post("/", createTask); // POST /api/tasks
router.get("/:id", getTask); // GET /api/tasks/:id
router.patch("/:id", updateTask); // PATCH /api/tasks/:id
router.delete("/:id", deleteTask); // DELETE /api/tasks/:id

// Protected route example
// router.get("/tasks", requireAuth, async (req, res) => {
// Only authenticated users can access this route
// req.user will contain the authenticated user
// });

export default router;
