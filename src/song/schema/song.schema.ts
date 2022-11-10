import { Schema } from 'mongoose';

export const SongSchema = new Schema({
  tracklistId: { type: Schema.Types.ObjectId, ref: 'Tracklist' },
  number: Number,
  name: String,
  writers: [String],
  length: Number,
});
