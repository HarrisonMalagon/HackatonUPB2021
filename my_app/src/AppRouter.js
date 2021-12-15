import {

  Route,
  Routes,
  useLocation
} from 'react-router-dom'
import {Index} from './pages/index'
import {Footer} from './pageframe/footer/footer'
import {Nav} from './pageframe/nav/nav'
import { Lista_servicios } from './pages/lista_servicios';
import { Registro } from './pages/registro';
import { Login } from './pages/login';
import { Detalle_servicio } from './pages/detalle_servicio';
import { Nuevo_servicio } from './pages/nuevo_servicio';

function AppRouter() {

  // const { location } = useLocation();

  const rutas_excluidas = ['/login','/registro']


  return (
    <>
    <Nav />
      {/* {rutas_excluidas.includes(location.pathname) ? null : <Nav />} */}
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/lista_servicios" element={<Lista_servicios />}></Route>
          <Route path="/detalle_servicio/:id" element={<Detalle_servicio />}></Route>
          <Route path="/servicios/nuevo" element={<Nuevo_servicio />}></Route>
          </Routes>
          
          {/* {rutas_excluidas.includes(location.pathname) ? null : <Footer />} */}
          <Footer />
      </>
  );
}

export default AppRouter;
