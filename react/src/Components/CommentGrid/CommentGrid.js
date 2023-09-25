import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
                    <div className='col-6'>
                    {
                        c.userImg &&
                        <img src={c.userImg} alt='user-img'/>
                    }

                    <div className='row'>
                        <span><b>{c.username}</b></span>
                        <p>{c.content}</p>
                    </div>

                    </div>
                </div>
            ))
        }
        </>
        
    )
}
