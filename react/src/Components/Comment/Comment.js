import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

export default function Comment({postId}) {

    const {usuario} = useContext(AuthContext)

    const [comment, setComment] = useState();
    const [error, setError] = useState();

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try{
            await axios.post(`https://independientips-api.onrender.com/api/comments/${postId}`, {
                content: comment,
                post_id: postId
            });
            window.location.reload();
        }catch(err){
            console.log(err);
            setError(err.response.data);
        }
    }

    return (
        <div class="col-lg-6 mb-3">
            {
                usuario && 
                <>
                <hr/>
                <h4 className='my-3'>Comentario</h4>
                <textarea class="form-control my-3" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setComment(e.target.value)} required></textarea>
                <button className='btn btn-primary' onClick={handleSubmit}>Enviar comentario</button>
                {error && <span className='mx-3'>{error}</span>}
                </>
            }
            
        </div>
    )
}
