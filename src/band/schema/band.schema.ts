import { Schema } from 'mongoose';

export const BandSchema = new Schema({
  name: String,
  summary: String,
  origin: String,
  startTemp: Number,
  endTemp: Number,
  toPresent: Boolean,
  discography: [
    {
      id: String,
      name: String,
      endpoint: String,
    },
  ],
  genres: [
    {
      id: String,
      name: String,
      endpoint: String,
    },
  ],
  members: [
    {
      id: String,
      name: String,
      endpoint: String,
    },
  ],
  pastMembers: [
    {
      id: String,
      name: String,
      endpoint: String,
    },
  ],
});
