import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RootLayout from './components/layout/RootLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RootLayout/>
    </>
  )
}

export default App
