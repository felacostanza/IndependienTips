import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditarComment() {

    const params = useParams();
    const navigate = useNavigate();

    const [content, setContent] = useState();

    useEffect(() => {
        const fetch = async () => {
            try{
                const res = await axios.get(`/comments/edit/${params.id}`);
                console.log(res);
                setContent(res.data);
                console.log(content);
            }catch(err){
                console.log(err);
            }
        }
        fetch();
    }, [params.id]);

    const handleSubmit = async () => {
        try{
            const res = await axios.put(`/comments/${params.id}`, {
                content: content
            })
            console.log(res);
            navigate('/');
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-6'>
                <textarea class="form-control my-3" id="exampleFormControlTextarea1" rows="3" value={content.content} onChange={(e) => setContent(e.target.value)} required></textarea>
                <button className='btn btn-primary' onClick={handleSubmit}>Enviar comentario</button>
            </div>
        </div>
    </div>
  )
}
