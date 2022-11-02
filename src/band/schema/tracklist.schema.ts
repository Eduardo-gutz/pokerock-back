import { Schema } from 'mongoose';

export const TracklistSchema = new Schema({
  albumId: Number,
  version: String,
  songs: [
    {
      id: String,
      name: String,
      endpoint: String,
    },
  ],
});
