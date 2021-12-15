import React from 'react'
import './estilos.css'
import './estilosFormulario.css'

export const Login = () => {
    return (
      <>
      <div id="inner_banner" className="section inner_banner_section" style={{'min-height':'100px'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
              <div className="title-holder m-0 mt-3 mb-2">
                <div className="title-holder-cell text-left">
                  <h1 className="page-title">Login</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section m-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
        <div className="imagen_wrapper w-100 text-center">
          <img className="imagen" src="/landing_logo.png" alt="" />
        </div>
        <form className="formulario">
          <div className="contenedor">
            <div className="input-contenedor">  
              <i className="fa fa-user icon" />
              <input id="in_login_username" type="text" placeholder="Usuario" />
            </div>
            <div className="input-contenedor">
            <i className="fa fa-user icon" />
              <input id="in_login_password" type="password" placeholder="Contraseña" />
            </div>
            <div className="input-contenedor">
              <i className="fa fa-refresh" aria-hidden="true" />
              <input id="in_login_captcha" type="rcaptcha" placeholder="¿Capital de Colombia?" />
            </div>
            <input type="submit" defaultValue="Login" className="button" />
            <p>
              Al registrarte aceptas nuestras condiciones de uso y politicas de privacidad
            </p>
            <p>
              ¿No tienes una cuenta? 
              <a className="link" href="it_about.html">Regístrate</a></p>
          </div>
        </form>
      </div>
      </div>
      </div>
      </div>
      </>
    )
}
