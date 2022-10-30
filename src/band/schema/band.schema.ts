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
      id: Number,
      name: String,
      endpoint: String,
    },
  ],
  genders: [
    {
      id: Number,
      name: String,
      endpoint: String,
    },
  ],
  members: [
    {
      id: Number,
      name: String,
      endpoint: String,
    },
  ],
  pastMembers: [
    {
      id: Number,
      name: String,
      endpoint: String,
    },
  ],
});
