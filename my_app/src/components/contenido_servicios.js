import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Contenido_servicios = () => {
    const navigate = useNavigate();

    const cargar_detalles = (number) => {
        console.log('adasd')
        navigate(`/detalle_servicio/`+number);
    }

    return (
<div className="section padding_layout_1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="main_heading text_align_center">
                  <h2>Servicios</h2>
                  <p className="large">Encuentra lo que necesitas para facilitar tu vida.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list"  onClick={() => { cargar_detalles(1)}}>
                <div className="product_img"> <img className="img-responsive" src="/images/it_service/1.jpg" alt="" /> </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4><a href="/it_shop_detail.html">Servicios de Aseo</a></h4>
                  </div>
                  <div className="starratin">
                    <div className="center"> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star-o" aria-hidden="true" /> </div>
                  </div>
                  <div className="product_price">
                    <p><span className="old_price">$45.000</span> – <span className="new_price">$35.000</span></p>
                    <p><span className="phone">WhatsApp: 3215564235 / correo: aseosproductivos@gmail.com</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list"  onClick={() => { cargar_detalles(2)}}>
                <div className="product_img"> <img className="img-responsive" src="/images/it_service/2.jpg" alt="" /> </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4><a href="/it_shop_detail.html">Servicio de plomeria</a></h4>
                  </div>
                  <div className="starratin">
                    <div className="center"> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star-o" aria-hidden="true" /> </div>
                  </div>
                  <div className="product_price">
                    <p><span className="old_price">$24.990</span><span className="new_price"> $12.490</span></p>
                    <p><span className="phone">WhatsApp: 3155488998 / correo: plomerialasevilla@gmail.com</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list"  onClick={() => { cargar_detalles(3)}}>
                <div className="product_img"> <img className="img-responsive" src="/images/it_service/3.jpg" alt="" /> </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4><a href="/it_shop_detail.html">Servicios de instalación de lámparas</a></h4>
                  </div>
                  <div className="starratin">
                    <div className="center"> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star-o" aria-hidden="true" /> </div>
                  </div>
                  <div className="product_price">
                    <p><span className="old_price">$24.990</span><span className="new_price"> $12.490</span></p>
                    <p><span className="phone">WhatsApp: 3125478787 / correo: instalaciones@gmail.com</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list"  onClick={() => { cargar_detalles(4)}}>
                <div className="product_img"> <img className="img-responsive" src="/images/it_service/4.jpg" alt="" /> </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4><a href="/it_shop_detail.html">Servicio de mantenimiento de tuberias, redes eléctricas</a></h4>
                  </div>
                  <div className="starratin">
                    <div className="center"> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star-o" aria-hidden="true" /> </div>
                  </div>
                  <div className="product_price">
                    <p><span className="old_price">$75.000</span> – <span className="new_price">$55.000</span></p>
                    <p><span className="phone">WhatsApp: 3165899898 / correo: mantenimientos@gmail.com</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list"  onClick={() => { cargar_detalles(4)}}>
                <div className="product_img"> <img className="img-responsive" src="/images/it_service/5.jpg" alt="" /> </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4><a href="/it_shop_detail.html">Servicio de construcción</a></h4>
                  </div>
                  <div className="starratin">
                    <div className="center"> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star-o" aria-hidden="true" /> </div>
                  </div>
                  <div className="product_price">
                    <p><span className="old_price">$215.000</span> – <span className="new_price">$115.000</span></p>
                    <p><span className="phone">WhatsApp: 3185478789 / correo: obreros@gmail.com</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list"  onClick={() => { cargar_detalles(5)}}>
                <div className="product_img"> <img className="img-responsive" src="/images/it_service/6.jpg" alt="" /> </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4><a href="/it_shop_detail.html">Servicio de vidrieria</a></h4>
                  </div>
                  <div className="starratin">
                    <div className="center"> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star-o" aria-hidden="true" /> </div>
                  </div>
                  <div className="product_price">
                  <p><span className="old_price">$34.990</span><span className="new_price"> $25.490</span></p>
                  <p><span className="phone">WhatsApp: 3184789898/ correo: vidrieria@gmail.com</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list"  onClick={() => { cargar_detalles(6)}}>
                <div className="product_img"> <img className="img-responsive" src="/images/it_service/7.jpg" alt="" /> </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4><a href="/it_shop_detail.html">Servicios de mantenimiento/reparación computadores</a></h4>
                  </div>
                  <div className="starratin">
                    <div className="center"> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star-o" aria-hidden="true" /> </div>
                  </div>
                  <div className="product_price">
                  <p><span className="old_price">$84.990</span><span className="new_price"> $50.490</span></p>
                  <p><span className="phone">WhatsApp: 3145899686 / correo: computadores@gmail.com</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list"  onClick={() => { cargar_detalles(7)}}>
                <div className="product_img"> <img className="img-responsive" src="/images/it_service/8.jpg" alt="" /> </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4><a href="/it_shop_detail.html">Servicios de maquillaje</a></h4>
                  </div>
                  <div className="starratin">
                    <div className="center"> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star-o" aria-hidden="true" /> </div>
                  </div>
                  <div className="product_price">
                  <p><span className="old_price">$18.000</span><span className="new_price"> $12.490</span></p>
                  <p><span className="phone">WhatsApp: 3147899658 / correo: maquillaje@gmail.com</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list"  onClick={() => { cargar_detalles(8)}}>
                <div className="product_img"> <img className="img-responsive" src="/images/it_service/9.jpg" alt="" /> </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4><a href="/it_shop_detail.html">Servicios de costura</a></h4>
                  </div>
                  <div className="starratin">
                    <div className="center"> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star-o" aria-hidden="true" /> </div>
                  </div>
                  <div className="product_price">
                  <p><span className="old_price">$25.000</span><span className="new_price"> $12.490</span></p>
                  <p><span className="phone">WhatsApp: 3147489898 / correo: costuras@gmail.com</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list"  onClick={() => { cargar_detalles(9)}}>
                <div className="product_img"> <img className="img-responsive" src="/images/it_service/10.jpg" alt="" /> </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4><a href="/it_shop_detail.html">Servicios de mercado a domicilio</a></h4>
                  </div>
                  <div className="starratin">
                    <div className="center"> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star-o" aria-hidden="true" /> </div>
                  </div>
                  <div className="product_price">
                    <p><span className="old_price">$24.990</span><span className="new_price"> $12.490</span></p>
                    <p><span className="phone">WhatsApp: 3145689898 / correo: mercadosadomicilio@gmail.com</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list"  onClick={() => { cargar_detalles(10)}}>
                <div className="product_img"> <img className="img-responsive" src="/images/it_service/11.jpg" alt="" /> </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4><a href="/it_shop_detail.html">Reparación/Construcción de zapatos a medida</a></h4>
                  </div>
                  <div className="starratin">
                    <div className="center"> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star-o" aria-hidden="true" /> </div>
                  </div>
                  <div className="product_price">
                    <p><span className="old_price">$24.990</span><span className="new_price"> $12.490</span></p>
                    <p><span className="phone">WhatsApp: 3165698989 / correo: zapatosamedida@gmail.com</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 margin_bottom_30_all">
              <div className="product_list"  onClick={() => { cargar_detalles(11)}}>
                <div className="product_img"> <img className="img-responsive" src="/images/it_service/12.jpg" alt="" /> </div>
                <div className="product_detail_btm">
                  <div className="center">
                    <h4><a href="/it_shop_detail.html">Relojería</a></h4>
                  </div>
                  <div className="starratin">
                    <div className="center"> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star" aria-hidden="true" /> <i className="fa fa-star-o" aria-hidden="true" /> </div>
                  </div>
                  <div className="product_price">
                  <p><span className="old_price">$24.990</span><span className="new_price"> $10.490</span></p>
                  <p><span className="phone">WhatsApp: 3178985858 / correo: relojes@gmail.com</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
