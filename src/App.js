import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [date, setDate] = useState([])
  const uri = 'https://pokeapi.co/api/v2/pokemon/'
  useEffect(() => (
    window.fetch(uri)
      .then(res => res.json())
      .then(json => json.results)
      .then(date => setDate(date))
  ), [])

  return (
    <>
      <ul>
        {date.map(v => (
          <li key={v.url}>{v.name}</li>
        ))}
      </ul>
    </>
  )
}
export default App
