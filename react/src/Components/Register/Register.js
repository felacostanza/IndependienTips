import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import './Register.css'

export default function Register() {

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState(null);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setValues(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("/auth/register", values);
            console.log(res);
            navigate('/login')
        } catch (err) {
            console.log(err);
            setError(err.response.data);
        }
    }

    return (
        <div className='container-fluid'>
            <div className='row justify-content-center d-flex align-items-center' id='container-register'>
                <div className='col-xl-4 col-lg-6 col-md-6 col-sm-10 text-center' id='register-card'>
                    <h2 className='mb-3'>Registro</h2>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Nombre de usuario</span>
                        <input type="text" class="form-control" placeholder="Nombre de usuario" aria-label="Username" name='username' onChange={handleChange} required/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="email" class="form-control" placeholder="E-mail" aria-label="email" name='email' onChange={handleChange} required/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Contraseña</span>
                        <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name='password' onChange={handleChange} required/>
                        <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                    </div>
                    <button className='btn btn-primary' onClick={handleSubmit}>Registrarse</button>
                    {error && <p>{error}</p>}
                </div>
            </div>
        </div>
    )
}
