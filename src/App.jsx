import './App.css'

function App() {
  let name = "mohammad";
  let isPrimum = false;
  return (
     <>
         <h2>salam {name}</h2>
         <h1>khodafez {name}</h1>
         <h2>yout ticket code { isPrimum ? '12345' : 'not foud code'}</h2>
     </>
  )
}

export default App
