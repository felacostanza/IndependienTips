import React from 'react'
import './HomePage.css'

export default function HomePage() {
  return (
    <>
    <header className="py-5 bg-image-full" id="header">
        <div className="text-center my-5">
            <h1 className="text-white fs-3 fw-bolder">IndependienTips</h1>
            <p className="text-white-50 mb-0">Consejos para la juventud</p>
        </div>
    </header>

    <section className="py-5">
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h2>IndependienTips</h2>
                    <p className="lead">Un sitio donde podés encontrar la ayuda que necesitabas</p>
                    <p className="mb-0">Proporcionamos a miles de jóvenes con consejos y tips sobre temas recurrentes en gente recién emancipada, como cocina, mudanza, tecnologia, problemas técnicos, etc.</p>
                </div>
            </div>
        </div>
    </section>

    <div className='row justify-content-center'>
        <div className='col-lg-8'>
            <hr/>
        </div>
    </div>

    <section className="py-5">
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h2>Colaboración por parte de la comunidad</h2>
                    <p className="lead">Los miembros de IndependienTips pueden ayudarse</p>
                    <p className="mb-0">La idea principal de la aplicación radica en la colaboración entre los usuarios de IndependienTips, que tienen la posibilidad de poder realizar sus propias publicaciones y realizar comentarios a otros miembros para poder ayudarse mutuamente</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
