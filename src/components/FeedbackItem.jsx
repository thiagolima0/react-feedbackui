import AppCard from './shared/AppCard'
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({ feedback, handleDelete }) => {
  return (
    <AppCard>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => handleDelete(feedback.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </AppCard>
  )
}

export default FeedbackItem
