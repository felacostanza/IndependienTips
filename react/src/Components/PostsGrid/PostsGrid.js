import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios";

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
            <div className="col-lg-6">  
                <div className="card mb-4">
                    <div className="card-header">Buscar</div>
                    <div className="card-body">
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Ingresar título" aria-label="Enter search term..." aria-describedby="button-search" />
                            <button className="btn btn-primary" id="button-search" type="button">Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className="card mb-4">
                    <div className="card-header">Categorias</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="list-unstyled mb-0">
                                    <li><Link to='/articulos?cat=cocina'>Cocina</Link></li>
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

        <div className='row'>
            {
                blogs.map((blog, index) => (
                    <div className="col-lg-6" key={index}>   
                        <div className="card mb-4">
                            <Link to={`/ver-blog/${blog.id}`}><img class="card-img-top" src={`../upload/${blog.img}`} alt="..."/></Link>
                            <div className="card-body">
                                <h2 className="card-title h4">{blog.titulo}</h2>
                                <p className="card-text">{blog.desc}</p>
                                <p className='card-text'>{blog.date}</p>
                                <Link to={`/ver-blog/${blog.id}`}><button className='btn btn-secondary'>Ver blog</button></Link>
                            </div>
                        </div>  
                    </div>
                ))
            }
        </div>  
    </div> 
    </div>
  )
}
