import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
import multer from "multer";
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"

const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../react/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
})

const upload = multer({ storage: storage })

app.post('/api/upload', upload.single("file"), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
})

app.use(express.json({limit:'50mb'}));
app.use(cors());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

app.listen(4000, () => {
    console.log("Conexión exitosa")
})