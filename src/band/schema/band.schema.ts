import { Schema } from 'mongoose';

export const BandSchema = new Schema({
  name: String,
  summary: String,
  origin: String,
  startTemp: Number,
  endTemp: Number,
  toPresent: Boolean,
  discography: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
  genres: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
  members: [{ type: Schema.Types.ObjectId, ref: 'Artist' }],
  pastMembers: [{ type: Schema.Types.ObjectId, ref: 'Artist' }],
});
