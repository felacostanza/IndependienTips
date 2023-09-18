import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
//import postRoutes from "./routes/posts.js"
//import userRoutes from "./routes/users.js"
//import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
//app.use('/api/users', userRoutes);
//app.use('/api/posts', postRoutes);
//app.use('/api/comments', commentRoutes);

app.listen(4000, () => {
    console.log("Conexión exitosa")
})