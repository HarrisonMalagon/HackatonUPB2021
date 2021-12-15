import React from 'react'

export const Registro = () => {
    return (
        <>
        <div id="inner_banner" className="section inner_banner_section ,b-5" style={{'min-height':'100px'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="title-holder m-0 mt-3 mb-2">
                  <div className="title-holder-cell text-left">
                    <h1 className="page-title">Registro</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section  m-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
          <div className="imagen_wrapper w-100 text-center">
            <img className="imagen" src="/landing_logo.png" alt="" />
          </div>
        <br/>
        <form id="form_nuevo_usuario mb-5" >
            <label htmlFor="lnombre">Nombre del Usuario:</label>
            <input id="dato_nombre_usuario" className="border-bottom" type="text" name="lnombre" /><br/><br/>

            

            <label htmlFor="lcontrasena">Correo:</label>
            <input type="text" id="dato_contrasena" className="border-bottom" name="lcontrasena" /><br/><br/><br/><br/>

            <label htmlFor="ledad">Contraseña:</label>
            <input type="password" id="dato_edad_usuario" className="border-bottom" name="ledad" step="1" min="0" max="580" value="" style={{'lineHeight':1}} /><br/><br/>

            <button onClick="agregarRegistro(); return false;"  className="my_button" id="enviar_registro">Enviar Registro</button>
        
        </form>
      </div>

      </div>
          </div>
        </div>
      </>
    )
}
