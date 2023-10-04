import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios";
import './PostsGrid.css'
import moment from 'moment';

export default function PostsGrid() {

    const [blogs, setBlogs] = useState([]);

    const cat = useLocation().search;

    useEffect(() => {
        const fetch = async () => {
            try{
                const res = await axios.get(`/posts${cat}`);
                setBlogs(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetch();
    }, [cat])

  return (
    <div className="container">
        <div className="row mt-5">
            <div className='col-lg-9'>
                <div className="card mb-4">
                    <div className="card-header">Categorias</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="list-unstyled mb-0">
                                    <li><Link to='/articulos?cat=comida'>Cocina</Link></li>
                                    <li><Link to='/articulos?cat=tecnologia'>Tecnología</Link></li>
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <ul className="list-unstyled mb-0">
                                    <li><Link to='/articulos?cat=mudanza'>Mudanza</Link></li>
                                    <li><Link to='/articulos?cat=servicios'>Servicios</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        <div className='row mt-3'>
        
        {
            blogs.length !== 0 ?
            <>
            {
                blogs.map((blog, index) => (
                    <div className="col-lg-4 mb-4" key={index}>   
                        <div className="card h-100">
                            <Link to={`/ver-blog/${blog.id}`}><img className="card-img-top img-size" src={blog.img} alt="..."/></Link>
                            <div className="card-body">
                                <h2 className="card-title h4">{blog.titulo}</h2>
                                <p className="card-text">{blog.desc}</p>
                                <p className='card-text'>{moment(blog.date).fromNow()}</p>
                                <Link to={`/ver-blog/${blog.id}`}><button className='btn btn-secondary'>Ver blog</button></Link>
                            </div>
                        </div>  
                    </div>
                ))
            }
            </>
            :
            <div className='row justify-content-center d-flex align-items-center no-hay'>
                <h1 className='text-center'>No hay blogs</h1>
            </div>

        }
            
         
        </div>
    </div>
  )
}
