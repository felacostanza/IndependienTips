import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const navigate = useNavigate();

    const login = async (values) => {
        const res = await axios.post("https://independientips-api.onrender.com/api/auth/login", values);
        setUsuario(res.data);
    }

    const logout = async (values) => {
        await axios.post("https://independientips-api.onrender.com/api/auth/logout");
        setUsuario(null);
        navigate('/');
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(usuario))
    }, [usuario]);

    return(
        <AuthContext.Provider value={{usuario, login, logout}}>{children}</AuthContext.Provider>
    )
}