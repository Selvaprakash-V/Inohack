import express, { Request, Response } from 'express';
import { saveGeneratedPrompt } from '../services/userService';

const router = express.Router();

// Save generated prompt
router.post('/:uid/generatedPrompt', async (req: Request, res: Response) => {
  const uid = req.params.uid as string; // Ensure uid is a string
  const prompt = req.body.prompt as string; // Ensure prompt is a string

  try {
    await saveGeneratedPrompt(uid, prompt);
    res.status(200).send({ message: 'Prompt saved successfully' });
  } catch (error) {
    console.error('Error saving generated prompt:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;