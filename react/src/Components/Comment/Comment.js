import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Comment({postId}) {

    const [comment, setComment] = useState();

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try{
            await axios.post(`/comments/${postId}`, {
                content: comment,
                post_id: postId
            });
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div class="col-6 mb-3">
            <h4 className='my-3'>Comentario</h4>
            <textarea class="form-control my-3" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setComment(e.target.value)} required></textarea>
            <button className='btn btn-primary' onClick={handleSubmit}>Enviar comentario</button>
        </div>
    )
}
