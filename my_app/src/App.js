import logo from './logo.svg';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Routes,
  Redict
} from 'react-router-dom'
import {Index} from './pages/index'
import {Footer} from './pageframe/footer/footer'
import {Nav} from './pageframe/nav/nav'
import { Lista_servicios } from './pages/lista_servicios';
import { Registro } from './pages/registro';
import { Login } from './pages/login';

function App() {
  return (
    <div className="App">

      <Router >
        <Nav />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/lista-servicios" element={<Lista_servicios />}></Route>
          </Routes>
          
        <Footer />
      </Router>

    </div>
  );
}

export default App;
