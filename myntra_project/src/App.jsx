import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainrouter from './routers/mainrouter'
import Header from './component/header'

function App() {

  return (
    <>
      <Header/>
      <Mainrouter/>
    </>
  )
}

export default App
