import { Schema } from 'mongoose';

export const TracklistSchema = new Schema({
  albumId: { type: Schema.Types.ObjectId, ref: 'Album' },
  version: String,
  songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }],
});
