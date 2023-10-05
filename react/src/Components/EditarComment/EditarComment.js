import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './EditarComment.css'

export default function EditarComment() {

    const params = useParams();
    const navigate = useNavigate();

    const [content, setContent] = useState();

    useEffect(() => {
        const fetch = async () => {
            try{
                const res = await axios.get(`https://independientips-api.onrender.com/api/comments/edit/${params.id}`);
                console.log(res);
                setContent(res.data.content);
                console.log(content);
            }catch(err){
                console.log(err);
            }
        }
        fetch();
    }, [params.id]);

    const handleSubmit = async () => {
        try{
            const res = await axios.put(`https://independientips-api.onrender.com/api/comments/${params.id}`, {
                content: content
            })
            console.log(res);
            navigate('/');
        }catch(err){
            console.log(err);
        }
    }

    console.log(content)

  return (
    <div className='container'>
        <div className='row justify-content-center d-flex align-items-center' id='container-comment'>
            <div className='col-8'>
                <h1 className='text-center'>Editar comentario</h1>
                <div id='card-comment'>
                    <textarea class="form-control my-3" id="exampleFormControlTextarea1" rows="3" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                    <button className='btn btn-primary' onClick={handleSubmit}>Enviar comentario</button>
                </div>
            </div>
        </div>
    </div>
  )
}
