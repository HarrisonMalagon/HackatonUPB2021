import React from 'react'

export const Nuevo_servicio = () => {
    return (
        <div>
                  <div>
        {/* inner page banner */}
        <div id="inner_banner" className="section inner_banner_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="title-holder">
                    <div className="title-holder-cell text-left">
                      <h1 className="page-title">Detalle del Servicio</h1>
                      <ol className="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Services Detail</li>
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
        <div className="section padding_layout_1 service_list">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-12 service_blog margin_bottom_50">
                    <div className="full">
                      <div className="service_img"> <img className="img-responsive" src="/images/it_service/post-02.jpg" alt="#" /> </div>
                      
                      
                      <input id="id_service_name" class="border-bottom mt-3 bg-light w-100" type="text" placeholder="Escribe aquí el título" />
                      <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Escribe una descripción" className="bg-light service_cont w-100  border-bottom border-0 w-100" style={{'height':'100px'}}>
                      </textarea> 
                      
                      

                    </div>
                  </div>
                </div>
                
              </div>
              <div className="col-md-3">
                <div className="side_bar">
                <div className="side_bar_blog">
                    <div className="side_bar_search">
                      <div className="input-group stylish-input-group" style={{'height':'50vh'}}>
                        <div className=" m-auto  text-center">

                        <button className="btn btn-lg btn-dark">Publicar Servicio</button>

                        </div>
                       

                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end section */}
      </div>
        </div>
    )
}
