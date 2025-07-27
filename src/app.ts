import express from 'express';
import authRoutes from './routes/auth.routes';
import folderRoutes from './routes/folder.routes';
import fileRoutes from './routes/file.routes';
import { errorHandler } from './middlewares/error.middleware';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use('/api/auth', authRoutes);
app.use('/api/folders', folderRoutes);
app.use('/api/files', fileRoutes);

export default app;
