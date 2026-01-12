import express from 'express';
import User from '../models/User';

const router = express.Router();

// POST /onboarding
router.post('/', async (req, res) => {
  try {
    const { uid, onboarding } = req.body;
    if (!uid || !onboarding) {
      return res.status(400).json({ error: 'Missing uid or onboarding data.' });
    }

    let user = await User.findOne({ uid });
    if (!user) {
      user = new User({ uid, onboarding });
      await user.save();
      return res.status(201).json({ message: 'User created', user });
    } else {
      user.onboarding = onboarding;
      user.updatedAt = new Date();
      await user.save();
      return res.status(200).json({ message: 'User updated', user });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

export default router;
