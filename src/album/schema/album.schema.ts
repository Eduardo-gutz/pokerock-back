import { Schema } from 'mongoose';

export const AlbumSchema = new Schema({
  artists: [{ type: Schema.Types.ObjectId, ref: 'Artist' }],
  band: { type: Schema.Types.ObjectId, ref: 'Band' },
  name: String,
  relase: String,
  recorder: String,
  studio: String,
  producer: String,
  label: String,
  length: Number,
  genres: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
  track_list: [{ type: Schema.Types.ObjectId, ref: 'Tracklist' }],
  bref: String,
});
