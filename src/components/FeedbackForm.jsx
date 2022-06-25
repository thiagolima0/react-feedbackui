import { useState } from 'react'
import AppCard from './shared/AppCard'
import AppButton from './shared/AppButton'
import RatingSelect from './RatingSelect'

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)

    setMessage('Please insert at least 10 characters')
    setBtnDisabled(true)

    if (e.target.value.length > 10) {
      setBtnDisabled(false)
      setMessage('')
    }
  }

  const handleSubmit = (e) => {
    if (text.length > 10) {
      e.preventDefault()
      const id = new Date().getTime()

      handleAdd({ id, text, rating })

      setText('')
      setRating(10)
    }
  }

  return (
    <AppCard>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate you services with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <AppButton isDisabled={btnDisabled} type="submit">
            Send
          </AppButton>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </AppCard>
  )
}

export default FeedbackForm
