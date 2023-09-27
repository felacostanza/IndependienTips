/*
import { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import BlotFormatter from 'quill-blot-formatter';
import 'quill/dist/quill.snow.css';

import './EditorBlog.css';


const EditorBlog = () => {
  const { quill, quillRef, Quill } = useQuill({
    modules: { blotFormatter: {} }
  });

  const [content, setContent] = useState();
  
  if (Quill && !quill) {
    //const BlotFormatter = require('quill-blot-formatter');
    Quill.register('modules/blotFormatter', BlotFormatter);
  }
  
  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldContents) => {
        console.log('Text change!');
        //console.log(delta);

        let currrentContents = quill.getContents();
        //console.log(currrentContents.diff(oldContents));
        //console.log(JSON.stringify(currrentContents));
        setContent(JSON.stringify(currrentContents));
      });
    }
  }, [quill, Quill]);

  console.log(content);

  return (
      <div className='container'>

          <h4 className='mt-3'>Título</h4>

          <div className="input-group input-group-lg">
              <span className="input-group-text" id="inputGroup-sizing-lg">Título</span>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
          </div>

          <div class="mb-3">
              <h4 className='mt-3'>Imagen</h4>
              <input class="form-control" type="file" id="formFile"/>
          </div>
          
          <div class="mb-3">
              <h4 className='mt-3'>Descripción</h4>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <h4 className='mt-3'>Categoría</h4>

          <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="tecnologia"/>
              <label className="form-check-label" htmlFor="inlineRadio1">Tecnología</label>
          </div>
          <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="comida"/>
              <label className="form-check-label" htmlFor="inlineRadio2">Comida</label>
          </div>
          <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="mudanza"/>
              <label className="form-check-label" htmlFor="inlineRadio3">Mudanza</label>
          </div>
          <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="servicios"/>
              <label className="form-check-label" htmlFor="inlineRadio4">Servicios</label>
          </div>

          <h4 className='mt-3'>Contenido</h4>

          <div ref={quillRef} />
        

          <div className='col text-center'>
            <button className='btn btn-primary mt-3 mb-3' type='submit'>Crear Post</button>
          </div>

          <div className='col-8'>
            <h2 className='text-center'>{content}</h2>
          </div>

      </div>
  );
};

export default EditorBlog;*/