import { useState } from 'react'

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    setSelected(Number(e.currentTarget.value))
    select(Number(e.currentTarget.value))
  }
  const radioButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <ul className="rating">
      {radioButtons.map((num, index) => (
        <li key={index}>
          <input
            type="radio"
            id={`num${num}`}
            name="rating"
            value={`${num}`}
            onChange={handleChange}
            checked={selected === num}
          />
          <label htmlFor={`num${num}`}>{`${num}`}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
