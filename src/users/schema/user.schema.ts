import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: String,
  birthDate: Number,
  username: String,
  email: String,
  password: String,
  refreshToken: String,
});
