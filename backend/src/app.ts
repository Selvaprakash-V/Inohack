import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import onboardingRouter from './routes/onboarding';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


const mongoUri = process.env.MONGODB_URI;
mongoose.connect(mongoUri || '')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/onboarding', onboardingRouter);

app.get('/', (req, res) => {
  res.send('OneVoice API running');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
