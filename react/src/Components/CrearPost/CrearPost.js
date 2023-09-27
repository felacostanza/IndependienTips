import React from 'react'
import './CrearPost.css'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import moment from "moment"
import { useNavigate } from 'react-router-dom';

export default function CrearPost() {

    const { quill, quillRef } = useQuill({
        modules: { 
            toolbar: {
                container: [
                  [{ header: [1, 2, 3, 4, 5, 6, false] }],
                  ["bold", "italic", "underline", "strike"],
                  [{ color: [] }, { background: [] }],
                  [{ list: "ordered" }, { list: "bullet" }],
        
                  [
                    { indent: "-1" },
                    { indent: "+1" },
                    { align: [] },
                  ],
                  [{ direction: "rtl" }],
                  [{ size: ["small", false, "large", "huge"] }],
                  ["link", "image", "video"],
                  ["clean"],
                ],
                history: {
                  delay: 500,
                  maxStack: 100,
                  userOnly: true,
                },
              },
        },
        theme: "snow"
    });
    
    const [titulo, setTitulo] = useState();
    const [desc, setDesc] = useState();
    const [file, setFile] = useState();
    const [cat, setCat] = useState();
    const [content, setContent] = useState();

    const navigate = useNavigate();
      
    useEffect(() => {
        if (quill) {
          quill.on('text-change', (delta, oldContents) => {
    
            let currrentContents = quill.getContents();
            setContent(JSON.stringify(currrentContents));
          });
        }
    }, [quill]);


    const upload = async () => {
        try{
            const formInfo = new FormData();
            formInfo.append("file", file)
            const res = await axios.post('/upload', formInfo)
            return res.data;
        }catch(err){
            console.log(err);
        }
    }



    const handleSubmit = async (e) => {

        e.preventDefault();
        
        const imgUrl = await upload();

        try{
            await axios.post('/posts', {
                titulo: titulo, 
                desc: desc, 
                img: file ? imgUrl : "", 
                cat: cat,
                content: content, 
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
            })
        }catch(err){
            console.log(err)
        }
        navigate('/');
    }

  return (
    <div id='container-blog'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-8'>

                    <div className='container'>
                
                    <h4 className='mt-3'>Título</h4>

                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Título</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={(e) => setTitulo(e.target.value)} required/>
                    </div>

                    <div class="mb-3">
                        <h4 className='mt-3'>Imagen</h4>
                        <input class="form-control" type="file" id="formFile" onChange={(e) => setFile(e.target.files[0])} required/>
                    </div>
                    
                    <div class="mb-3">
                        <h4 className='mt-3'>Descripción</h4>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setDesc(e.target.value)} required></textarea>
                    </div>

                    <h4 className='mt-3'>Categoría</h4>

                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="tecnologia" onChange={(e) => setCat(e.target.value)}/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Tecnología</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="comida" onChange={(e) => setCat(e.target.value)}/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Comida</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="mudanza" onChange={(e) => setCat(e.target.value)}/>
                        <label className="form-check-label" htmlFor="inlineRadio3">Mudanza</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="servicios" onChange={(e) => setCat(e.target.value)}/>
                        <label className="form-check-label" htmlFor="inlineRadio4">Servicios</label>
                    </div>

                    <h4 className='mt-3'>Contenido</h4>

                    <div ref={quillRef} />
                    
                    <div className='col text-center'>
                        <button className='btn btn-primary mt-3 mb-3' onClick={handleSubmit}>Crear Post</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
