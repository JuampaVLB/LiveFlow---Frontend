import { useState, useEffect } from 'react'
import { io } from 'socket.io-client';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"

// Web Sockets

const socket = io.connect('http://localhost:4000');

// liveflow-backend-production.up.railway.app

function App() {

  return (
    <>
      <Header/>
        <Home/>
      <Footer/>
    </>
  )
}

export default App
