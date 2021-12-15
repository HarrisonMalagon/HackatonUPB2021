import React from 'react'
import {
  useParams
} from "react-router-dom";

export const Detalle_servicio = () => {

  let { id } = useParams();

  console.log(id)
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
                        <li className="active">Detalles del Servicio</li>
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
          <div className="container  text-center">
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-12 service_blog margin_bottom_50">
                    <div className="full">
                      <div className="service_img"> <img className="img-responsive" style={{'maxHeight':'550px'}} src={"/images/it_service/"+id+".jpg"} alt="#" /> </div>
                      <div className="service_cont">
                        
                        
                        <h3 className="service_head">Servicio de plomeria</h3>
                        <p>Destape de cañerias sin romper. 
                        <br />Maquinaria especializada, 
                        <br />Detección de fuga con geófono. 

                        <br />Encuentre, no rompemos. 
                        <br />Reparación y cambio de toda clase de griferias. 
                        <br />Reparación e instalación de sistemas hidráulicos<br /></p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="col-md-3">
                <div className="side_bar">
                <div className="side_bar_blog">
                    <h4>PUNTAJE</h4>
                    <div className="side_bar_search">
                      <div className="input-group stylish-input-group">
                       
                      <div class="starratin">
              <div class="center"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star-o" aria-hidden="true"></i> </div>
            </div>


                       </div>
                    </div>
                  </div>
                  <div className="mt-4 side_bar_blog">
                    <h4  className="">NUEVO COMENTARIO</h4>
                    <div className="side_bar_search">
                      <div className="input-group stylish-input-group">
                      <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Escribe una descripción" className=" service_cont w-100  border-bottom border-1 w-100" style={{'height':'100px'}}>
                      </textarea> 
                    </div>
                    </div>
                  </div>
                  <div className="mt-4 side_bar_blog">
                    <h4 className="mt-4">COMENTARIOS</h4>
                    <div className="side_bar_search">
                      <div className="input-group stylish-input-group">
                        <input className="form-control" placeholder="Search" type="text" />
                        <span className="input-group-addon">
                          <button type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
                        </span> </div>
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
