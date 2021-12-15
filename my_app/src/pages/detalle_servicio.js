import React from 'react'

export const Detalle_servicio = () => {
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
                      <div className="service_cont">
                        <h3 className="service_head">Data recovery</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                          into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
