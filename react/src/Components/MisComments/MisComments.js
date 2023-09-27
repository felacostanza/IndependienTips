import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function MisComments() {

    const {usuario} = useContext(AuthContext);

    const navigate = useNavigate();

    const [misComentarios, setMisComentarios] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchMyComments = async () => {
        try{
          const res = await axios.get(`/comments/mis-comments/${usuario.id}`);
          setMisComentarios(res.data);
        }catch(err){
          console.log(err);
          setError(err.response.data);
        }
      }

      fetchMyComments();
    }, [usuario.id]);

    console.log(misComentarios)

    const handleDelete = async (id) => {
      try{ 
        const res = await axios.delete(`/comments/${id}`);
        console.log(res);
        navigate('/');
      }catch(err){
        console.log(err);
      }
    }

    console.log(error)

    return (
      <div className='container'>
        {
          !error ?
          <div className='row'>
            {
              misComentarios.length !== 0 ?
                <>
                {
                  misComentarios.map((c, index) => (
              
                    <div className="col-lg-4 col-md-6 my-4" key={index}>   
                      <div className="card h-100">
                          <div className="card-body">
                              <h2 className="card-title h4">"{c.content}" en la publicacion <b>{c.titulo}</b></h2>
                              <Link to={`/editar-comentario/${c.id}`}><button className='btn btn-warning'>Editar comentario</button></Link>
                              <button className='btn btn-danger mx-2' onClick={() => handleDelete(c.id)}>Borrar comentario</button>
                          </div>
                      </div>  
                    </div>
                  ))
                }
                </>
              :
              <div className='row justify-content-center d-flex align-items-center no-hay'>
                  <h1>No tienes comentarios</h1>
              </div>  
            }

          </div>
          :
          <h1>{error}</h1>
          }
        
      </div>
    )
}
