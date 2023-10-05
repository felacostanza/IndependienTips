import jwt from "jsonwebtoken";
import { db } from "../Database/database.js";
import bcrypt from "bcryptjs"

export function updateData(req, res){
    const token = req.cookies.token;
    if(!token) return res.status(401).json("No esta autenticado");

    jwt.verify(token, "barabirip", (err, infoUser) => {
        if(err) return res.status(403).json("El token no es válido");

        const query = "UPDATE users SET `username` = ?, `email` = ?, `password` = ? WHERE `id` = ?"

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

    

        db.query(query, [req.body.username, req.body.email, hash, infoUser.id], (err, info) => {
            if (err) return res.json(err);

            return res.status(200).json("Perfil actualizado correctamente");
        })
        
    })
}

export function updateImg(req, res){
    const token = req.cookies.token;
    if(!token) return res.status(401).json("No esta autenticado");

    jwt.verify(token, "barabirip", (err, infoUser) => {
        if(err) return res.status(403).json("El token no es válido");

        const query = "UPDATE users SET `img` = ? WHERE `id` = ?"

        db.query(query, [req.body.img, infoUser.id], (err, info) => {
            if (err) return res.json(err);

            return res.status(200).json("Foto de perfil actualizada correctamente");
        })
        
    })
}