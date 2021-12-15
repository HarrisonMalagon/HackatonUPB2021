import React from 'react'

export const Nav = () => {
    return (
        <>
        <div className="bg_load"> <img className="loader_animation" src={"./images/loaders/loader_1.png"} alt="#" /> </div>
        <header id="default_header" className="header_style_1">
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="full">
                  <div className="topbar-left">
                    <ul className="list-inline">
                      <li>
                        <span className="topbar-label">
                          <i className="fa fa-home" />
                        </span>
                        <span className="topbar-hightlight">
                          Colombia
                        </span>
                      </li>
                      <li>
                        <span className="topbar-label">
                          <i className="fa fa-envelope-o" />
                        </span>
                        <span className="topbar-hightlight">
                          <a href="/mailto:info@yourdomain.com">
                            getit@gmail.com
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 right_section_header_top">
                <div className="float-left">
                  <div className="social_icon">
                    <ul className="list-inline">
                      <li>
                        <a className="fa fa-facebook" href="https://www.facebook.com/" title="Facebook" target="_blank" />
                      </li>
                      <li>
                        <a className="fa fa-google-plus" href="https://plus.google.com/" title="Google+" target="_blank" />
                      </li>
                      <li>
                        <a className="fa fa-twitter" href="https://twitter.com" title="Twitter" target="_blank" />
                      </li>
                      <li>
                        <a className="fa fa-linkedin" href="https://www.linkedin.com" title="LinkedIn" target="_blank" />
                      </li>
                      <li>
                        <a className="fa fa-instagram" href="https://www.instagram.com" title="Instagram" target="_blank" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="float-right">
                  <div className="make_appo">
                    <a className="btn white_btn" href="/make_appointment.html">
                      Contáctenos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_bottom">
          <div className="container-flex w-100">
            <div className="row ml-5 mr-5">
              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="logo">
                  <a href="/it_home.html">
                    <img src="/images/logos/it_logo.png" style={{height: '90px'}} alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 m-auto">
                <div className="d-inline-block text-center m-0 p-0 w-100">
                  <form className="input-group" style={{height: '40px'}}>
                    <input type="search" className="form-control" placeholder="Busca tu servicio aqui" aria-label="Search" />
                    <button className="btn btn-sm btn-dark text-center input-group-append h-100 m-0 p-auto" type="submit" style={{minWidth: '30px', width: '70px'}}>
                      <span className="m-auto text-center">
                        Buscar
                      </span>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                <div className="menu_side m-auto">
                  <div id="navbar_menu">
                    <ul className="first-ul">
                      <li>
                        <a className="active" href="/">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="/registro/">Regístrate</a>
                      </li>
                      <li>
                        <a href="/login/">
                          Inicia Sesión
                        </a>
                      </li>
                      <li>
                        <a href="/it_service.html">Servicios</a>
                        <ul>
                          <li>
                            <a href="/lista_servicios/">
                              Lista de Servicios
                            </a>
                          </li>
                          <li>
                            <a href="/servicios/nuevo">
                              Ofrecer Servicios
                            </a>
                          </li>
                          <li>
                            <a href="/it_contact.html">
                              Contáctenos
                            </a>
                            <ul>
                              <li>
                                <a href="/it_contact.html">
                                  Contact Page 1
                                </a>
                              </li>
                              <li>
                                <a href="/it_contact_2.html">
                                  Contact Page 2
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      </>
    )
}