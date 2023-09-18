import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = async (values) => {
        const res = await axios.post("/auth/login", values);
        setUsuario(res.data);
    }

    const logout = async (values) => {
        await axios.post("/auth/logout");
        setUsuario(null);
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(usuario))
    }, [usuario]);

    return(
        <AuthContext.Provider value={{usuario, login, logout}}>{children}</AuthContext.Provider>
    )
}