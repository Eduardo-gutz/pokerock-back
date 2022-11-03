import { Schema } from 'mongoose';

export const SongSchema = new Schema({
  tracklistId: Number,
  number: Number,
  name: String,
  writers: [String],
  length: Number,
});
