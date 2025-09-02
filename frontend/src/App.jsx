import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Shop from './Component/Pages/Shop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
   <Navbar />

   <Shop />
  </div>
  )
}

export default App
