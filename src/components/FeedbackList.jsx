import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedbacks }) => {
  if (feedbacks.length === 0) {
    return <p>No feedbacks yet</p>
  }
  return (
    <div className="feedback-list">
      {feedbacks.map(feedback => (
        <FeedbackItem
          feedback={feedback}
          key={feedback.id}
        />
      ))}
    </div>
  )
}

export default FeedbackList
