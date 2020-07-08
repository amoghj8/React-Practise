import React from 'react'
import Joke from './Joke'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div>
      <Joke question="Q" punchline="A"/>
      <Joke question="Qsadasd" punchline="Aasdasd"/> 
    </div>
  )
}

export default App