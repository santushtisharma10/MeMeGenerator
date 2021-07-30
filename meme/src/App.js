//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import Meme from './components/Meme';
import Formf from "./components/Formf"

function App() {

  const [top, setTop] = useState("")
  const [bot, setBot] = useState("")
  const [url, setUrl] = useState("")

  return (

    <div>
      <Navbar />
      <br />
      <br />
      <Formf top={top} bot={bot} setTop={setTop} setBot={setBot} setUrl={setUrl} />

      {url.length > 0 && <Meme top={top} bot={bot} url={url} />}

    </div>
  )
}

export default App;
