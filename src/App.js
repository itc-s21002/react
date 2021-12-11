import React, { useState, useEffect } from 'react'
import './App.css'

const values = [{ id: 1, item: 'uri1' }]
const SelectItems = values.map(value => {
  return (
    <option value={value.item} Key={value.id}>
      {value.item}
    </option>
  )
})
const App = () => {
  const [selectedValue, setSelectedValue] = useState(values[0].item)
  const handleChange = e => {
    setSelectValue(e.target.value)
  }
  const uri = 'https://pokeapi.co/api/v2/pokemon/'
  useEffect(
    () =>
      window
        .fetch(uri)
        .then(res => res.json())
        .then(json => json.results)
        .then(date => setDate(date)),
    []
  )

  return (
    <div className='App'>
      <ul>
        <p>
          現在選択されている値:
          <b>{selectedValue}</b>
        </p>
        <select value={selectValue} onChange={handleChange}>
          {SelectItems}
        </select>
        {date.map(v => (
          <li key={v.url}>{v.name}</li>
        ))}
      </ul>
    </div>
  )
}
export default App
