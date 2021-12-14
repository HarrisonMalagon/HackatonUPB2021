// import logo from './logo.svg';
import {
  // Switch,
  BrowserRouter as Router,
  Route,
  Routes,
  // Redict
} from 'react-router-dom'
import {Index} from './pages/index'
import {Footer} from './pageframe/footer/footer'
import {Nav} from './pageframe/nav/nav'



function App() {

  // const [file, setFile] = useState(null)

  // const selectedHandler = e=>{
  //   // console.log(e.target.files[0])
  //   setFile (e.target.files[0])
  // }

  // const sendHandler  = ()=>{
  //   if(!file){
  //     alert('No has seleccionado ningun archivo')
  //     return
  //   }
  
  //   // Formateo del archivo que se enviara al servidor image es el nombre del formateo
  //   const formadata = new FormData()
  //   formadata.append('image', file)
  //   // Enviar archivo
  //   fetch('http://localhost:9000/images/post',{
  //       method: 'POST',
  //       body: formadata
  //   })
  //   .then(res=> res.text())
  //   .then(res=> console.log(res))
  //   .catch(err => {
  //     console.err(err)
  //   })

  //   document.getElementById('fileinput').value = null
  //   setFile(null)

  // }
  return (
    <div className="App">

      <Router >
        <Nav />
        <Routes>
          <Route path="/" component={Index}></Route>
          </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
