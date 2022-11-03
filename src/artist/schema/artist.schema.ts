import { Schema } from 'mongoose';

export const ArtistSchema = new Schema({
  name: String,
  artistName: String,
  birthDate: Number,
  deathDate: Number,
  causeDeath: String,
  startTemp: Number,
  endTemp: Number,
  instruments: [String],
  roles: [String],
  mainBand: {
    id: String,
    name: String,
    endpoint: String,
  },
  othersBands: [
    {
      id: String,
      name: String,
      endpoint: String,
    },
  ],
  timeline: [
    {
      id: String,
      name: String,
      endpoint: String,
    },
  ],
  discography: [
    {
      id: String,
      name: String,
      endpoint: String,
    },
  ],
});
