import React,{Fragment,useState} from 'react'


function App() {

  const [file, setFile] = useState(null)

  const selectedHandler = e=>{
    // console.log(e.target.files[0])
    setFile (e.target.files[0])
  }

  const sendHandler  = ()=>{
    if(!file){
      alert('No has seleccionado ningun archivo')
      return
    }
  
    // Formateo del archivo que se enviara al servidor image es el nombre del formateo
    const formadata = new FormData()
    formadata.append('image', file)
    // Enviar archivo
    fetch('http://localhost:9000/images/post',{
        method: 'POST',
        body: formadata
    })
    .then(res=> res.text())
    .then(res=> console.log(res))
    .catch(err => {
      console.err(err)
    })

    document.getElementById('fileinput').value = null
    setFile(null)

  }
  return (
    <Fragment>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
          <a href='#!' className='navbar-brand'>
            Inicio
          </a>
        </div>
      </nav>
      <div className='container mt-5'>
        <div className='card p-3'>
          <div className='row'>
            <div className='col-10'>
            <input id='fileinput' onChange={selectedHandler} className='form-control' type="file"></input>
            </div>
            <div className='col-2'>
            <button onClick={sendHandler}  type="button" className='btn btn-primary col-12'>Subir</button>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
