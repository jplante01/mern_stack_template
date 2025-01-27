import 'dotenv/config';
import express from "express";
import cors from "cors";
import connectDatabase from './db/connection.js';
import taskRoutes from './routes/taskRoutes.js';
import userRoutes from './routes/userRoutes.js';

const PORT = process.env.PORT || 5050;
const app = express();

connectDatabase();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes); 
app.use('/api/users', userRoutes);  

// start the Express server
  app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});