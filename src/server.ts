import app from './app';
import { connectDB } from './config/db';
import dotenv from 'dotenv';
import { checkS3Connection } from './config/s3';

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://192.168.0.227:${PORT}`);
    checkS3Connection();
  });
});
