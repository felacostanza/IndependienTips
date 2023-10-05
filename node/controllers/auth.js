import jwt from "jsonwebtoken";
import { db } from "../Database/database.js";
import bcrypt from "bcryptjs"

export function register(req, res){

    const query = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(query, [req.body.email, req.body.username], (err, info) => {
        if(err) return res.json(err);
        if(info.length) return res.status(409).json("El usuario ya existe");

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const query = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";

        const values = [
            req.body.username,
            req.body.email,
            hash
        ];

        db.query(query, [values], (err, info) => {
            if(err) return console.log(err);

            return res.status(200).json("Usuario creado");
        });
    });
}


export function login(req, res){

    const query = "SELECT * FROM users WHERE username = ?";

    db.query(query, [req.body.username], (err, info) => {
        if(err) return res.json(err);
        if(info.length === 0) return res.status(404).json("El usuario no existe");

        const contraseñaCorrecta = bcrypt.compareSync(req.body.password, info[0].password);

        if(!contraseñaCorrecta) return res.status(400).json("Contraseña incorrecta");

        const token = jwt.sign({id:info[0].id}, "barabirip");
        const {password, ...otros} = info[0];

        res.cookie("token", token, {
            secure: true,
            httpOnly: true,
            domain: 'https://independientips.netlify.app',
            sameSite : lax
        }).status(200).json(otros);

        res.json("INICIO SESION")
    })

}

export function logout(req, res){
    res.clearCookie("token", {
        sameSite: "none",
        secure: true
    }).status(200).json("Usuario cerro sesión")
}