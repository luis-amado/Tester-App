import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoute from './routes/user';

require('dotenv').config();

const app = express();
const port = 3100;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/user', userRoute);

app.listen(port, async () => {

  console.log(`Express server listening at http://localhost:${port}`);
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Conected to MongoDB');

});