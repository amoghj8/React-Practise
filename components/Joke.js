import React from 'react'

function Joke(props) {
  return (
    <div>
      <h3>{props.question}</h3>
      <h5>{props.punchline}</h5>
    </div>
  )
}

export default Joke