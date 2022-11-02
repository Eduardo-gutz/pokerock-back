import { Schema } from 'mongoose';

export const GenderSchema = new Schema({
  name: String,
  bref: String,
});
