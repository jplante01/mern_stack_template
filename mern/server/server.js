import 'dotenv/config';
import express from "express";
import cors from "cors";
// import records from "./routes/record.js";
import connectDatabase from './db/connection.js';

const PORT = process.env.PORT || 5050;
const app = express();

connectDatabase();

app.use(cors());
app.use(express.json());
// app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});