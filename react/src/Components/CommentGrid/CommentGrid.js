import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './CommentGrid.css'

export default function CommentGrid({postId}) {

    const [comments, setComments] = useState([]);

    useEffect(() => {

        const fetchComments = async () => {
            try{
                const res = await axios.get(`/comments/${postId}`);
                console.log(res);
                setComments(res.data);
                console.log(comments)
            }catch(err){
                console.log(err)
            }
        }

        fetchComments();

    }, [postId])

    return (
        <>
        {
            comments.map((c, index) => (
                <div className='row'>
                    <h4 className='my-3'>Comentarios de la publicación</h4>
                    <div className='col-lg-6'>
                    {
                        c.userImg &&
                        <img src={c.userImg} alt='user-img'/>
                    }

                    <div className='row'>
                        <div>
                        {c.img && <img src={c.img} className='prof-img-comment'/>}
                        <span className='mx-3 name'><b>{c.username}</b></span>
                        </div>
                        <p id='single-comment' className='my-3'>{c.content}</p>
                    </div>

                    </div>
                </div>
            ))
        }
        </>
        
    )
}
