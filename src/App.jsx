import { useState } from 'react'
import './App.css'
import quotes from "./db/Quote.json"
import { getRandom } from './utils/random'
import QuoteBox from './components/QuoteBox'
const Bkgraunds = ["bg1","bg2","bg3","bg4"]

function App() {

   // console.log(getRandom(quotes)) comprueba si estoy trayendo aleatoriamente la frase

  const [quote, setQuote] = useState(getRandom(quotes))
  const [ChangeBkG, setChangeBkG] = useState(getRandom(Bkgraunds))


  
  const handleChangeQuote = ()=>{
    setQuote(getRandom(quotes))
    setChangeBkG(getRandom(Bkgraunds))
  }


  return (
    <main className={`App ${ChangeBkG}`}>
      <h1>Entrgable 1 Christian Haro</h1>
      <QuoteBox handleChangeQuote = {handleChangeQuote} quote = {quote}/>


    </main>
  )
}

export default App
