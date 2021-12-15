import React from 'react'

export const Footer = () => {
    return (
        <>
        {/* section */}
        <div className="section padding_layout_1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="main_heading text_align_center">
                    <h2>Elige el servicio que desees</h2>
                    <p className="large">Contacta y listo!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="full text_align_center margin_bottom_30">
                  <div className="center">
                    <div className="icon"> <img src="/images/it_service/i1.png" alt="#" /> </div>
                  </div>
                  <h4 className="theme_color">Servicio doméstico</h4>
                  <p>Contrata y valora la calidad del servicio</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="full text_align_center margin_bottom_30">
                  <div className="center">
                    <div className="icon"> <img src="/images/it_service/i2.png" alt="#" /> </div>
                  </div>
                  <h4 className="theme_color">Reparación/Mantenimiento de Computadores</h4>
                  <p>Especialistas en lo que necesitas</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="full text_align_center margin_bottom_30">
                  <div className="center">
                    <div className="icon"> <img src="/images/it_service/i3.png" alt="#" /> </div>
                  </div>
                  <h4 className="theme_color">Servicios de plomería, electricidad, Cerrajería</h4>
                  <p>Asistencias en lo que necesites</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="full text_align_center margin_bottom_30 margin_0">
                  <div className="center">
                    <div className="icon"> <img src="/images/it_service/i4.png" alt="#" /> </div>
                  </div>
                  <h4 className="theme_color">Obras o reformas</h4>
                  <p>Reformas de casas, aptos</p>
                </div>
              </div>
            </div>
            {/* <div className="row" style="margin-top: 35px">
      <div className="col-md-8">
        <div className="full margin_bottom_30">
          <div className="accordion border_circle">
            <div className="bs-example">
              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <p className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="/#collapseOne"><i className="fa fa-bar-chart" aria-hidden="true"></i> Complete Recovery from Local & External Drive<i className="fa fa-angle-down"></i></a> </p>
                  </div>
                  <div id="collapseOne" className="panel-collapse collapse in">
                    <div className="panel-body">
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it 
                        over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <p className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="/#collapseTwo"><i className="fa fa-plane"></i> Recovery Photo, Image, Video and Audio<i className="fa fa-angle-down"></i></a> </p>
                  </div>
                  <div id="collapseTwo" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it 
                        over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <p className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="/#collapseThree"><i className="fa fa-star"></i> Mobile Phone Recovery<i className="fa fa-angle-down"></i></a> </p>
                  </div>
                  <div id="collapseThree" className="panel-collapse collapse">
                    <div className="panel-body">
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it 
                        over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <p className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="/#collapseFour"><i className="fa fa-bar-chart" aria-hidden="true"></i> Complete Recovery from Local & External Drive<i className="fa fa-angle-down"></i></a> </p>
                  </div>
                  <div id="collapseFour" className="panel-collapse collapse in">
                    <div className="panel-body">
                      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it 
                        over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="full" style="margin-top: 35px;">
          <h3>Need file recovery?</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et 
            quasi architecto beatae vitae dicta sunt explicabo.. </p>
          <p><a className="btn main_bt" href="/#">Read More</a></p>
        </div>
      </div>
    </div>*/}
          </div>
        </div>
        {/* end section */}
        {/* section */}
        <div className="section padding_layout_1 light_silver gross_layout">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="main_heading text_align_left">
                    <h2>Proceso de Servicios</h2>
                    <p className="large">Manera eficaz de conseguir lo que necesitas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <div className="icon text_align_left"><img src="/images/it_service/slide4.jpg" alt="#" /></div>
                        <h4 className="service-heading">Servicio rápido</h4>
                        <p>Arregla el horario que convenga para ti y el prestador del servicio.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <div className="icon text_align_left"><img src="/images/it_service/si2.png" alt="#" /></div>
                        <h4 className="service-heading">Pagas después de recibir el servicio </h4>
                        <p>No necesitas pagar por adelantado, cuando tu servicio se complete puedes pagarlo.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <div className="icon text_align_left"><img src="/images/it_service/si3.png" alt="#" /></div>
                        <h4 className="service-heading">Personas con experiencia</h4>
                        <p>Excelente personal con experiencia para realizar las tareas que necesitas</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <div className="icon text_align_left"><img src="/images/it_service/si4.png" alt="#" /></div>
                        <h4 className="service-heading">Donde lo necesites</h4>
                        <p>Acuerda con el prestador del servicio el lugar para realizar el mantenimiento.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <div className="icon text_align_left"><img src="/images/it_service/si5.png" alt="#" /></div>
                        <h4 className="service-heading">Truequea un servicio</h4>
                        <p>Puedes acceder a un servicio, intercambiando tus conocimientos- con otro usuario.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="full">
                      <div className="service_blog_inner">
                        <div className="icon text_align_left"><img src="/images/it_service/si6.png" alt="#" /></div>
                        <h4 className="service-heading">Califica tu servicio</h4>
                        <p>Puntuar el servicio recibido.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end section */}
        {/* section */}
        {/*<div className="section padding_layout_1 light_silver gross_layout right_gross_layout">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="main_heading text_align_right">
                    <h2>Our Feedback</h2>
                    <p className="large">Easy and effective way to get your device repaired.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row counter">
              <div className="col-md-4"> </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin_bottom_50">
                    <div className="text_align_right"><i className="fa fa-smile-o" /></div>
                    <div className="text_align_right">
                      <p className="counter-heading text_align_right">Happy Customers</p>
                    </div>
                    <h5 className="counter-count">2150</h5>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin_bottom_50">
                    <div className="text_align_right"><i className="fa fa-laptop" /></div>
                    <div className="text_align_right">
                      <p className="counter-heading text_align_right">Laptop Repaired</p>
                    </div>
                    <h5 className="counter-count">1280</h5>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin_bottom_50">
                    <div className="text_align_right"><i className="fa fa-desktop" /></div>
                    <div className="text_align_right">
                      <p className="counter-heading">Computer Repaired</p>
                    </div>
                    <h5 className="counter-count">848</h5>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin_bottom_50">
                    <div className="text_align_right"><i className="fa fa-windows" /></div>
                    <div className="text_align_right">
                      <p className="counter-heading">OS Installed</p>
                    </div>
                    <h5 className="counter-count">450</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
        {/* end section */}
        {/* section */}
        {/* <div className="section padding_layout_1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="main_heading text_align_left">
                    <h2>Latest from Our Blog</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="full blog_colum">
                  <div className="blog_feature_img"> <img src="/images/it_service/post-03.jpg" alt="#" /> </div>
                  <div className="post_time">
                    <p><i className="fa fa-clock-o" /> April 16, 2018 ( In Maintenance )</p>
                  </div>
                  <div className="blog_feature_head">
                    <h4>Why Your Computer Hates You</h4>
                  </div>
                  <div className="blog_feature_cont">
                    <p>Lorem ipsum dolor sit amet, consectetur quam justo, pretium adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, ...</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="full blog_colum">
                  <div className="blog_feature_img"> <img src="/images/it_service/post-04.jpg" alt="#" /> </div>
                  <div className="post_time">
                    <p><i className="fa fa-clock-o" /> April 16, 2018 ( In Maintenance )</p>
                  </div>
                  <div className="blog_feature_head">
                    <h4>Easy Tips To Computer Repair</h4>
                  </div>
                  <div className="blog_feature_cont">
                    <p>Lorem ipsum dolor sit amet, consectetur quam justo, pretium adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, ...</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="full blog_colum">
                  <div className="blog_feature_img"> <img src="/images/it_service/post-06.jpg" alt="#" /> </div>
                  <div className="post_time">
                    <p><i className="fa fa-clock-o" /> April 16, 2018 ( In Maintenance )</p>
                  </div>
                  <div className="blog_feature_head">
                    <h4>Computer Maintenance 2018</h4>
                  </div>
                  <div className="blog_feature_cont">
                    <p>Lorem ipsum dolor sit amet, consectetur quam justo, pretium adipiscing elit. Vestibulum quam justo, pretium eu tempus ut, ...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
        {/* end section */}
        {/* section */}
        <div className="section padding_layout_1 testmonial_section white_fonts">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="main_heading text_align_left">
                    <h2 style={{textTransform: 'none'}}>Qué dicen nuestros usuarios?</h2>
                    <p className="large">Testimonios...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-7">
                <div className="full">
                  <div id="testimonial_slider" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ul className="carousel-indicators">
                      <li data-target="#testimonial_slider" data-slide-to={0} className="active" />
                      <li data-target="#testimonial_slider" data-slide-to={1} />
                      <li data-target="#testimonial_slider" data-slide-to={2} />
                    </ul>
                    {/* The slideshow */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="testimonial-container">
                          <div className="testimonial-content"> Me gustó mucho la página debido a que se encuentran las soluciones y asistencias a todo lo que requiero. </div>
                          <div className="testimonial-photo"> <img src="/images/it_service/client1.jpg" className="img-responsive" alt="#" width={150} height={150} /> </div>
                          <div className="testimonial-meta">
                            <h4>Maria Gómez</h4>
                            <span className="testimonial-position">Cali</span> </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="testimonial-container">
                          <div className="testimonial-content"> La página es útil, me dejó publicar mi servicio y consegui bastantes clientes para servirles en lo que requieren de costura. </div>
                          <div className="testimonial-photo"> <img src="/images/it_service/client2.jpg" className="img-responsive" alt="#" width={150} height={150} /> </div>
                          <div className="testimonial-meta">
                            <h4>Estefany Góngora</h4>
                            <span className="testimonial-position">Medellin</span> </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="testimonial-container">
                          <div className="testimonial-content"> Lo útil de la pagina es poder puntuar los servicios que se brindan, ya que en ocasiones se generan servicios no óptimos, pero en este caso fue acorde a lo requerido. </div>
                          <div className="testimonial-photo"> <img src="/images/it_service/client3.jpg" className="img-responsive" alt="#" width={150} height={150} /> </div>
                          <div className="testimonial-meta">
                            <h4>Cristina Muñoz</h4>
                            <span className="testimonial-position">Bogotá</span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="full"> </div>
              </div>
            </div>
          </div>
        </div>
        {/* end section */}
        {/* section */}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="contact_us_section">
                    <div className="call_icon"> <img src="/images/it_service/phone_icon.png" alt="#" /> </div>
                    <div className="inner_cont">
                      <h2>¿Deseas unirte a nuestro equipo?</h2>
                      <p>Tienes un servicio y no sabes ¿cómo colgarlo en la página?.</p>
                    </div>
                    <div className="button_Section_cont"> <a className="btn dark_gray_bt" href="/it_contact.html">Contáctenos</a> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end section */}
        {/* section */}
        <div className="section padding_layout_1" style={{padding: '50px 0'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <ul className="brand_list">
                    <li><img src="/images/it_service/brand_icon1.png" alt="#" /></li>
                    <li><img src="/images/it_service/brand_icon2.png" alt="#" /></li>
                    <li><img src="/images/it_service/brand_icon3.png" alt="#" /></li>
                    <li><img src="/images/it_service/brand_icon4.png" alt="#" /></li>
                    <li><img src="/images/it_service/brand_icon5.png" alt="#" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end section */}
        {/* Modal */}
        <div className="modal fade" id="search_bar" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><i className="fa fa-close" /></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8 offset-lg-2 offset-md-2 offset-sm-2 col-xs-10 col-xs-offset-1">
                    <div className="navbar-search">
                      <form action="#" method="get" id="search-global-form" className="search-global">
                        <input type="text" placeholder="Type to search" autoComplete="off" name="s" id="search" defaultValue className="search-global__input" />
                        <button className="search-global__btn"><i className="fa fa-search" /></button>
                        <div className="search-global__note">Begin typing your search above and press return to search.</div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Model search bar */}
        {/* footer */}
       <footer className="footer_style_2">
        <div className="container-fuild">
          <div className="row">
            <div className="map_section">
              <div id="map" />
            </div>
            <div className="footer_blog">
              <div className="row">
                <div className="col-md-6">
                  <div className="main-heading left_text">
                    
                    <h2>Nosotros...</h2>
                  </div>
                  <p>GET IT! Es una página centrada en la logística de servicios de asistencia a los usuarios que necesiten servicios técnicos o profesionales en diferentes áreas. Por medio de nuestra página, puedes recibir un servicio integral y oportuno de acuerdo a los horarios que se concierten con el prestador del servicio. Además, si deseas ofrecer un servicio puedes hacerlo y ser puntuado según la calidad que le brindes a tus clientes. Nuestro plus es truequear un servicio por otro, de manera que puedes intercambiar algo que conoces por lo que necesites.</p>
                  <ul className="social_icons">
                    <li className="social-icon fb"><a href="/#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                    <li className="social-icon tw"><a href="/#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                    <li className="social-icon gp"><a href="/#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="main-heading left_text">
                    <h2>Links adicionales</h2>
                  </div>
                  <ul className="footer-menu">
                    <li><a href="/it_about.html"><i className="fa fa-angle-right" /> Acerca de nosotros</a></li>
                    <li><a href="/it_term_condition.html"><i className="fa fa-angle-right" /> Terminos y condiciones</a></li>
                    <li><a href="/it_contact.html"><i className="fa fa-angle-right" /> Contáctenos</a></li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="main-heading left_text">
                    <h2>Servicios</h2>
                  </div>
                  <ul className="footer-menu">
                    <li><a href="/it_data_recovery.html"><i className="fa fa-angle-right" /> Servicios</a></li>

                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="main-heading left_text">
                    <h2>Contáctenos</h2>
                  </div>
                  <p>Colombia<br />
                    <span style={{fontSize: '18px'}}><a href="/tel:+9876543210">3156544332</a></span></p>
                  <div className="footer_mail-section">
                    <form>
                      <fieldset>
                        <div className="field">
                          <input placeholder="Email" type="text" />
                          <button className="button_custom"><i className="fa fa-envelope" aria-hidden="true" /></button>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="cprt">
              <p>GetIt! © Copyrights 2021 Design by Hackaton</p>
            </div>
          </div>
        </div>
      </footer>
      </>
    )
}