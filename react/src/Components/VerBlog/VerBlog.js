import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import moment from 'moment';
import Comment from '../Comment/Comment';
import CommentGrid from '../CommentGrid/CommentGrid';

export default function VerBlog() {

    const [blog, setBlog] = useState([]);

    const { quill, quillRef, Quill } = useQuill({
        readOnly: true,
        modules: { 
            toolbar: false,
        }
    });

    const params = useParams();

    useEffect(() => {
        const fetch = async () => {
            try{
                const res = await axios.get(`/posts/${params.id}`);
                setBlog(res.data);
                quill.setContents(JSON.parse(blog.content));
                
            }catch(err){
                console.log(err);
            }
        }
        fetch(); 

    }, [params.id, quill, blog.content]);
   
    return (
        <div className='container'>

            <h1 className='mt-3'>{blog.titulo}</h1>

            {
                blog.img &&
                <div class="mb-3">
                    <img src={`../upload/${blog.img}`} alt='foto-blog' className='card-img-top'/>
                </div>
            }

            <div class="mb-3">
                <h4 className='mt-3'>{blog.desc}</h4>
            </div>

            {
                blog.userImg &&
                <img src={blog.userImg} alt='user-img'/>
            }

            <div className='row'>
                <span><b>{blog.username}</b></span>
                <p>{moment(blog.date).fromNow()}</p>
            </div>
              
            <div ref={quillRef} />
    
            <hr/>

            <Comment postId={params.id}/>

            <CommentGrid postId={params.id}/>

        </div>
    )
}
