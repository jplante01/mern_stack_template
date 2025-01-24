import express from 'express';
import {
  createUser,
  getUser,
  updateUser,
  deleteUser
} from '../controllers/userController.js';

const router = express.Router();

// User routes
router.post('/', createUser);        // POST /api/users
router.get('/:id', getUser);         // GET /api/users/:id
router.patch('/:id', updateUser);     // PATCH /api/users/:id
router.delete('/:id', deleteUser);    // DELETE /api/users/:id

export default router;