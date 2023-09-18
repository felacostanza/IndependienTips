import React from 'react'
import { Link } from 'react-router-dom'

export default function PostsGrid() {
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
            <div className="col-lg-6">   
                <div className="card mb-4">
                    <a href="#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                    <div className="card-body">
                        <div className="small text-muted">January 1, 2023</div>
                            <h2 className="card-title h4">Post Title</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                            <a className="btn btn-primary" href="#!">Read more →</a>
                        </div>
                    </div>
                </div>  
            </div>
        </div>  
    </div> 
  )
}
