import { json } from "express";
import { db } from "../Database/database.js";
import jwt from "jsonwebtoken";

export function getPostComments(req, res){
    const query = "SELECT `username`, `img`, `content` FROM users u JOIN comments c ON u.id = c.user_id WHERE c.post_id = ?"

    db.query(query, [req.params.id], (err, info) => {
        if(err) return res.json(err);

        return res.status(200).json(info);
    })
}

export function getMyComments(req, res){
    const token = req.cookies.token;
    if(!token) return res.status(401).json("No esta autenticado");

    jwt.verify(token, "barabirip", (err, infoUser) => {
        if(err) return res.status(403).json("El token no es válido");

        const query = "SELECT `titulo`, c.content, c.id, c.post_id FROM posts p JOIN comments c ON p.id = c.post_id WHERE c.user_id = ?"

        const userId = req.params.uid;

        db.query(query, [userId], (err, info) => {
            if (err) return res.status(500).json(err);

            return res.status(200).json(info);
        })
        
    })
}

export function getEditComment(req, res){

    const token = req.cookies.token;
    if(!token) return res.status(401).json("No esta autenticado");

    jwt.verify(token, "barabirip", (err, infoUser) => {
        if(err) return res.status(403).json("El token no es válido");

        const query = "SELECT `content` FROM comments WHERE id = ?";

        db.query(query, [req.params.id], (err, info) => {
            if(err) return res.json(err);

            return res.status(200).json(info);
        })
        
    })
    
}

export function postComment(req, res){
    const token = req.cookies.token;
    if(!token) return res.status(401).json("No esta autenticado");

    jwt.verify(token, "barabirip", (err, infoUser) => {
        if(err) return res.status(403).json("El token no es válido");

        const query = "INSERT INTO comments (`content`, `post_id`, `user_id`) VALUES (?)"

        const values = [
            req.body.content,
            req.body.post_id,
            infoUser.id
        ]

        db.query(query, [values], (err, info) => {
            if (err) return res.status(500).json(err);

            return res.status(200).json("Comentario enviado");
        })
        
    })
}

export function editComment(req, res){
    const token = req.cookies.token;
    if(!token) return res.status(401).json("No esta autenticado");

    jwt.verify(token, "barabirip", (err, infoUser) => {
        if(err) return res.status(403).json("El token no es válido");

        const query = "UPDATE comments SET `content` = ? WHERE `id` = ? AND `user_id` = ?"
        
        db.query(query, [req.body.content, req.params.id, infoUser.id], (err, info) => {
            if(err) return res.json(err);

            return res.status(200).json("Comentario actualizado")
        })
    })
}

export function deleteComment(req, res){
    const token = req.cookies.token;
    if(!token) return res.status(401).json("No esta autenticado");

    jwt.verify(token, "barabirip", (err, infoUser) => {
        if(err) return res.status(403).json("El token no es válido");

        const query = "DELETE FROM comments WHERE `id` = ? AND `user_id` = ?"
        const commentId = req.params.id;


        db.query(query, [commentId, infoUser.id], (err, info) => {
            if (err) return res.json(err);

            return res.status(200).json("Comentario eliminado");
        })
        
    })
}