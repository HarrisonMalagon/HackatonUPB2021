import React from 'react'
import { Contenido_servicios } from '../components/contenido_servicios'

export const Lista_servicios = () => {
    return (
<div>
        {/* inner page banner */}
        <div id="inner_banner" className="section inner_banner_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="title-holder">
                    <div className="title-holder-cell text-left">
                      <h1 className="page-title">Lista de Servicios</h1>
                      <ol className="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Adquiere tus servicios</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end inner page banner */}
        {/* section */}
        <Contenido_servicios />
        {/* end section */}
      </div>
    )
}
