import { db } from "../Database/database.js";
import jwt from "jsonwebtoken";

export const getAllBlogs = (req, res) => {
    const query = req.query.cat ? "SELECT * FROM posts WHERE cat = ?" : "SELECT * FROM posts";

    db.query(query, [req.query.cat], (err, info) => {
        if(err) return res.json(err);

        return res.status(200).json(info);
    })
}

export const getSingleBlog = (req, res) => {
    const query = "SELECT `username`, `titulo` , `desc`, p.img, u.img AS userImg, `content`, `date` FROM users u JOIN posts p ON u.id = p.user_id WHERE p.id = ?";

    db.query(query, [req.params.id], (err, info) => {
        if(err) return res.json(err);

        return res.status(200).json(info[0]);
    })
}

export const postBlog = (req, res) => {

    const token = req.cookies.token;
    if(!token) return res.status(401).json("No esta autenticado");

    jwt.verify(token, "barabirip", (err, infoUser) => {
        if(err) return res.status(403).json("El token no es válido");

        const query = "INSERT INTO posts (`titulo`, `desc`, `img`, `content`, `cat`, `date`, `user_id`) VALUES (?)"

        const values = [
            req.body.titulo,
            req.body.desc,
            req.body.img,
            req.body.content,
            req.body.cat,
            req.body.date,
            infoUser.id
        ];

        db.query(query, [values], (err, info) => {
            if(err) return res.status(500).json(err);
            
            return res.status(200).json("Post creado")
        })
    })

}

export const updateBlog = (req, res) => {

}

export const deleteBlog = (req, res) => {

}
