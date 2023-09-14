import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import BlotFormatter from 'quill-blot-formatter';
import 'quill/dist/quill.snow.css';

import './EditorBlog.css';

const EditorBlog = () => {
  const { quill, quillRef, Quill } = useQuill({
    modules: { blotFormatter: {} }
  });

  if (Quill && !quill) {
    // const BlotFormatter = require('quill-blot-formatter');
    Quill.register('modules/blotFormatter', BlotFormatter);
  }

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldContents) => {
        console.log('Text change!');
        console.log(delta);

        let currrentContents = quill.getContents();
        console.log(currrentContents);
      });
    }
  }, [quill, Quill]);

  return (
    <div>
      <div ref={quillRef} />
      <form className='mt-3 mb-3'>
        <div class="input-group input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg">Título</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        </div>
        
        <h4 className='mt-3'>Categoría</h4>

        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="tecnologia"/>
            <label class="form-check-label" for="inlineRadio1">Tecnologia</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="comida"/>
            <label class="form-check-label" for="inlineRadio2">Comida</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="mudanza"/>
            <label class="form-check-label" for="inlineRadio3">Mudanza</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="servicios"/>
            <label class="form-check-label" for="inlineRadio4">Servicios</label>
        </div>

        <button className='btn btn-primary' type='submit'>Crear Post</button>

        </form>
    </div>
  );
};

export default EditorBlog;