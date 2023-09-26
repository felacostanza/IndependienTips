import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import './MisPosts.css'

export default function MisPosts() {
  
    const {usuario} = useContext(AuthContext);

    const navigate = useNavigate();

    const [myPosts, setMyPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const res = await axios.get(`/posts/mis-posts/${usuario.id}`);
                setMyPosts(res.data);
            }catch(err){
                console.log(err)
                setError(err.response.data);
            }
        }
        fetchPosts();
    }, [usuario.id])

    console.log(myPosts)

    const handleDelete = async (id) => {
        try{    
            await axios.delete(`/posts/${id}`);
            navigate('/');
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='container'>
            
            {
                !error ? (
                    myPosts.map((blog, index) => (
                        <div className='row h-100'>
                            <div className='col-8 my-3 '>
                                <div class="card">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                        <img src={`../upload/${blog.img}`} class=" rounded-start imagen" alt="..."/>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h2 class="card-title">{blog.titulo}</h2>
                                                <h4 class="card-text">{blog.desc}</h4>
                                                <p class="card-text"><small class="text-body-secondary">{moment(blog.date).fromNow()}</small></p>
                                                <Link to= {`/editar-blog/${blog.id}`}><button className='btn btn-warning'>Editar blog</button></Link>
                                                <button className='btn btn-danger mx-3' onClick={() => handleDelete(blog.id)}>Eliminar blog</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>        
                    ))
                )
                :
                <h2>{error}</h2>
            }
        </div>
    )
}
