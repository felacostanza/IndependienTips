import mysql from "mysql2"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "independientips"
})

db.connect((err) => {
    if(err){
        console.log(err);
        return
    }
    console.log("Conexion a la BBDD")
})