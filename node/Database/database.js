import mysql from "mysql2"
import { HOST, USER, PASSWORD, DATABASE, PORT} from "../config/config.js";

export const db = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    port: PORT
})

db.connect((err) => {
    if(err){
        console.log(err);
        return
    }
    console.log("Conexion a la BBDD")
})