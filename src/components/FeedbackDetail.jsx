import { useParams } from 'react-router-dom'
import AppCard from './shared/AppCard'
import FeedbakData from '../data/FeedbackData'
import { useNavigate } from 'react-router-dom'

const FeedbackDetail = () => {
  const params = useParams()
  const navigate = useNavigate()

  const backHome = () => {
    navigate('/')
  }

  const selectedFeedback = (id) => {
    return FeedbakData.filter((item) => Number(item.id) === Number(id))[0]
  }

  const feedbackText = selectedFeedback(params.id)?.text
  const feedbackRating = selectedFeedback(params.id)?.rating

  return (
    <div>
      <AppCard>
        {feedbackText ? (
          <>
            <div className="num-display">{feedbackRating}</div>
            <h1>{feedbackText}</h1>
          </>
        ) : (
          <h1>Not found</h1>
        )}

        <button onClick={backHome} className="btn btn-primary">
          Back home
        </button>
      </AppCard>
    </div>
  )
}

export default FeedbackDetail
