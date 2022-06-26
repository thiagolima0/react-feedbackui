import AppCard from './shared/AppCard'
import { useNavigate } from "react-router-dom";
import { FaTimes, FaInfoCircle, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({ feedback }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  const navigate = useNavigate()

  const handleDetail = (id) => {
    navigate(`/feedback/${id}`)
  }

  return (
    <AppCard>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => deleteFeedback(feedback.id)} className="close">
        <FaTimes size={20} color="purple" />
      </button>
      <button onClick={() => editFeedback(feedback)} className="detail">
        <FaEdit size={20} color="purple" />
      </button>
      <button onClick={() => handleDetail(feedback.id)} className="edit">
        <FaInfoCircle size={20} color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </AppCard>
  )
}

export default FeedbackItem
