import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Cardmovie } from './components/Movies'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <Cardmovie></Cardmovie>
    </>
  )
}

export default App
