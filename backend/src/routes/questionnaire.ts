import express from 'express';
import User from '../models/User'; // Corrected import for Mongoose model

const router = express.Router();

// POST /questionnaire
router.post('/', async (req, res) => {
  console.log('POST /questionnaire called with body:', req.body); // Debug log
  try {
    const { uid, questionnaire } = req.body;

    if (!uid || !questionnaire) {
      console.log('Missing required fields:', { uid, questionnaire }); // Debug log
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if the user exists
    let user = await User.findOne({ uid });
    console.log('User found:', user); // Debug log

    if (!user) {
      // Create a new user if not found
      user = new User({ uid, onboarding: { questionnaire } });
      await user.save();
      console.log('New user created:', user); // Debug log
      return res.status(201).json({ message: 'User created with questionnaire', user });
    } else {
      // Update the existing user's questionnaire
      user.onboarding.questionnaire = questionnaire;
      await user.save();
      console.log('User updated:', user); // Debug log
      return res.status(200).json({ message: 'Questionnaire updated successfully', user });
    }
  } catch (error) {
    console.error('Error in POST /questionnaire:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;