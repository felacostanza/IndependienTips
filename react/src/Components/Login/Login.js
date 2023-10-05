import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import './Login.css'

export default function Login() {
     
    const [values, setValues] = useState({
        username: "",
        password: ""
    });
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const {usuario, login} = useContext(AuthContext);

    const handleChange = (e) => {
        setValues(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await login(values);
            console.log(res);
            navigate('/')
        } catch (err) {
            console.log(err);
            setError(err.response.data);
        }
    }

    console.log(usuario);

    return (
        <div className='container-fluid'>
            <div className='row justify-content-center d-flex align-items-center' id='container-login'>
                <div className='col-xl-4 col-lg-6 col-md-6 col-sm-10 text-center' id='login-card'>
                    <h2 className='mb-3'>Iniciar Sesión</h2>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Nombre de usuario</span>
                        <input type="text" class="form-control" placeholder="Nombre de usuario" aria-label="Username" name='username' onChange={handleChange} required/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Contraseña</span>
                        <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name='password' onChange={handleChange} required/>
                    </div>
                    <button className='btn btn-primary' onClick={handleSubmit}>Iniciar sesión</button>
                    {error && <p>{error}</p>}
                </div>
            </div>
        </div>
    )
}
