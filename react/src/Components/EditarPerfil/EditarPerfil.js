import React, { useContext, useEffect, useState } from 'react'
import Avatar from 'react-avatar-edit'
import './EditarPerfil.css'
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';


export default function EditarPerfil() {

    const {usuario} = useContext(AuthContext);

    const [src, setSrc] = useState();
    const [preview, setPreview] = useState();
    const [msg, setMsg] = useState();
    const [res, setRes] = useState();

    const [values, setValues] = useState({
        username: usuario.username,
        email: usuario.email,
        password: ""
    });

    const onClose = () => {
        setPreview(null);
    }

    const onCrop = (view) => {
        setPreview(view)
    }

    useEffect(() => {
        console.log(preview)
    }, [preview])

    const handleChange = (e) => {
        setValues(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const handleImg = async () => {
        try{
            const res = await axios.put('https://independientips-api.onrender.com/api/users/img', {
                img: preview
            })
            console.log(res);
            setMsg(res.data);
        }catch(err){
            console.log(err);
        }
    }

    const handleSubmit = async () => {
        try{
            const res = await axios.put('https://independientips-api.onrender.com/api/users/data', values);
            console.log(res);
            setRes(res.data);
        } catch (err){
            console.log(err);
        }
    }

    console.log(values)

    return (
        <div className='container'>
            <div className='row my-4 justify-content-center'>
                <h1>Editar foto de perfil</h1>
                <hr/>
                <div className='col-lg-6 text-center'>
                    {preview && <img src={preview} alt='profile-picture' className='img-lol'/>}
                </div>
                <div className='col-lg-6 text-center'>
                    <Avatar
                        width={300}
                        height={300}
                        onCrop={onCrop}
                        onClose={onClose}
                        src={src}
                    />
                </div>
                <div className='col-2 text-center'><button className='btn btn-primary mt-5' onClick={handleImg}>Cambiar foto</button></div>
                {msg && <p className='text-center my-3'>{msg}</p>}
            </div>

            <div className='row my-4 justify-content-center'>
                <h1>Editar datos</h1>
                <hr/>
                <div className='col-lg-6 text-center my-3'>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Nombre de usuario</span>
                        <input type="text" class="form-control" placeholder="Nombre de usuario" aria-label="Username" name='username' value={values.username} onChange={handleChange}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="email" class="form-control" placeholder="E-mail" aria-label="email" name='email' value={values.email} onChange={handleChange}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Nueva Contraseña</span>
                        <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name='password' onChange={handleChange}/>
                        <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                    </div>
                </div>
                {res && <p className='text-center'>{res}</p>}
                <div className='row justify-content-center'>
                    <div className='col-2 text-center'><button className='btn btn-primary mt-2' onClick={handleSubmit}>Cambiar datos</button></div>
                </div>
                
            </div>
        </div>
    )
}
