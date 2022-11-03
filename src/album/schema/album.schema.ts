import { Schema } from 'mongoose';

export const AlbumSchema = new Schema({
  name: String,
  relase: String,
  recorder: String,
  studio: String,
  producer: String,
  label: String,
  length: Number,
  genres: [
    {
      id: String,
      name: String,
      endpoint: String,
    },
  ],
  track_list: [
    {
      id: String,
      name: String,
      endpoint: String,
    },
  ],
  bref: String,
});
