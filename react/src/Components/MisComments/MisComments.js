import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function MisComments() {

    const {usuario} = useContext(AuthContext);

    const navigate = useNavigate();

    const [misComentarios, setMisComentarios] = useState([])

    useEffect(() => {
      const fetchMyComments = async () => {
        try{
          const res = await axios.get(`/comments/mis-comments/${usuario.id}`);
          setMisComentarios(res.data);
        }catch(err){
          console.log(err);
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

    return (
      <div className='container'>
        {
          misComentarios.map((c, index) => (
            <div className='row'>
              <div className='col-8'>
                  <p>{c.content} en la publicacion <b>{c.titulo}</b></p>
                  <Link to={`/editar-comentario/${c.id}`}><button className='btn btn-warning'>Editar comentario</button></Link>
                  <button className='btn btn-danger mx-3' onClick={() => handleDelete(c.id)}>Borrar comentario</button>
              </div>
            </div>
          ))
        }
      </div>
    )
}
