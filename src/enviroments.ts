import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

export default {
  port: process.env.PORT,
  secret: process.env.SECRET_KEY,
  mongo: process.env.MONGO,
};