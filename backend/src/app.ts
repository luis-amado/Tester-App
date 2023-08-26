import express from 'express';
import mongoose from 'mongoose';

import User from './models/user';

require('dotenv').config();

const app = express();
const port = 3100;

app.get("/", async (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, async () => {
  console.log(`Express server listening at http://localhost:${port}`);
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Conected to MongoDB');
});