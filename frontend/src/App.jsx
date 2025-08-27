import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar />
    </>
  )
}

export default App
