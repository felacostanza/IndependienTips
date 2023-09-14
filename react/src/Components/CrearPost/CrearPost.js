import React from 'react'
import EditorBlog from '../EditorBlog/EditorBlog'

export default function CrearPost() {
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-8 text-center'>
                <h1>Crear Post</h1>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col-8'>
                <EditorBlog/>
            </div>
        </div>
    </div>
  )
}
