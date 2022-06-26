import AppCard from './shared/AppCard'
import { FaTimes, FaInfoCircle, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ feedback }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <AppCard>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => deleteFeedback(feedback.id)} className="close">
        <FaTimes size={20} color="purple" />
      </button>
      <button onClick={() => editFeedback(feedback)} className="detail">
        <FaEdit size={20} color="purple" />
      </button>
      <button className="edit">
        <FaInfoCircle size={20} color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </AppCard>
  )
}

export default FeedbackItem
