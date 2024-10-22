import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import place from './placeholder.png'
import axios from 'axios'

function App() {
  var [url,setURL]=useState(place)
  async function generate() {
    var request=await axios.post('http://localhost:1000/img',{url:document.getElementsByClassName('input')[0].value},{responseType:'blob'})
    var response=URL.createObjectURL(request.data)
    setURL(response)
  }
  return (
    <>
    <div className='main'>
      <div className='maininput'>
      <input placeholder='Enter the URL' type='text' className='input'></input><button onClick={generate} className='button'>Generate</button>
      </div>
      <div className='output'>
      <img src={url}></img>
      </div>
          </div>
    </>
  )
}

export default App
