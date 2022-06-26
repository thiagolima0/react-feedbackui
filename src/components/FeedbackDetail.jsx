import { useParams, useNavigate } from 'react-router-dom'
import AppCard from './shared/AppCard'
import { useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackDetail = () => {
  const params = useParams()
  const navigate = useNavigate()
  const { fetchFeedbackById, feedbacksDetail } = useContext(FeedbackContext)

  useEffect(() => {
    fetchFeedbackById(params.id)
  }, [])

  const backHome = () => {
    navigate('/')
  }

  return (
    <div>
      <AppCard>
        {feedbacksDetail.text ? (
          <>
            <div className="num-display">{feedbacksDetail.rating}</div>
            <h1>{feedbacksDetail.text}</h1>
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
