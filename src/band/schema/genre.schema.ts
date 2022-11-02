import { Schema } from 'mongoose';

export const GenreSchema = new Schema({
  name: String,
  bref: String,
});
