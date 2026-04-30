import { useState, useEffect } from 'react'
import './App.css'
import studentRegister from './pages/studentRegister.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
