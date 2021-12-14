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

function App() {
  return (
    <div className="App">

      <Router >
        <Nav />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          </Routes>
          
        <Footer />
      </Router>

    </div>
  );
}

export default App;
