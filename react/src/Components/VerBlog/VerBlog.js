import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import moment from 'moment';
import Comment from '../Comment/Comment';
import CommentGrid from '../CommentGrid/CommentGrid';
import './VerBlog.css'

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

        <div className='col-lg-9'>

                <div className='col-9'>
                    <h1 className='my-3 titulo'>{blog.titulo}</h1>
                </div>

                <div className='mb-3'>
                {
                    blog.userImg &&
                    <img src={blog.userImg} alt='user-img' className='prof-img'/>
                }
                    <span className='mx-3 name'><b>{blog.username}, </b></span>
                    <span>{moment(blog.date).fromNow()}</span>
                    
                </div>

                {
                    blog.img &&
                    <div class="mb-3">
                        <img src={`../upload/${blog.img}`} alt='foto-blog' className='card-img-top rounded blog-img'/>
                    </div>
                }

                <div class="mb-3">
                    <h4 className='mt-3 desc'>{blog.desc}</h4>
                </div>

                
                <div ref={quillRef}/>
        
                

            </div>    

            <Comment postId={params.id}/>

            <hr/>

            <CommentGrid postId={params.id}/>

        </div>
    )
}
