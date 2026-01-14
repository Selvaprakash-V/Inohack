import mongoose, { Schema, Document } from 'mongoose';

export interface Onboarding {
  textSize: string;
  communicationPreference: string;
  usageContexts: string[];
  primaryLanguage: string;
  secondaryLanguage: string;
}

export interface IUser extends Document {
  uid: string;
  onboarding: Onboarding;
  createdAt: Date;
  updatedAt: Date;
  // Future fields: preferences, personalization, aiEmbeddings, etc.
}

const OnboardingSchema: Schema = new Schema({
  textSize: { type: String, required: true },
  communicationPreference: { type: String, required: true },
  usageContexts: { type: [String], required: true },
  primaryLanguage: { type: String, required: true },
  secondaryLanguage: { type: String, required: true },
});


const UserSchema: Schema = new Schema({
  uid: { type: String, required: true, unique: true, index: true },
  onboarding: { type: OnboardingSchema, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  // Future fields: preferences, personalization, aiEmbeddings, etc.
});

// Create indexes for onboarding options for analytics and fast lookup
UserSchema.index({
  'onboarding.textSize': 1,
  'onboarding.communicationPreference': 1,
  'onboarding.usageContexts': 1,
  'onboarding.primaryLanguage': 1,
  'onboarding.secondaryLanguage': 1,
  uid: 1
});




export default mongoose.model<IUser>('User', UserSchema, 'onboarding');
