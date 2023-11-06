import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { MoviesContainer } from './components/MoviesContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Navbar/>
      <MoviesContainer/>
    </>
  )
}

export default App
