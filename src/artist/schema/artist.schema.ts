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
  mainBand: { type: Schema.Types.ObjectId, ref: 'Band' },
  othersBands: [{ type: Schema.Types.ObjectId, ref: 'Band' }],
  timeline: [
    {
      id: String,
      name: String,
      endpoint: String,
    },
  ],
  discography: [{ type: Schema.Types.ObjectId, ref: 'Album' }],
});
