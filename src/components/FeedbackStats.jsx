const FeedbackStats = ({ feedbacks }) => {
  const feedbackAvg = (
    feedbacks.reduce((acc, cur) => acc + cur.rating, 0) / feedbacks.length
  )
    .toPrecision(2)
    .replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(feedbackAvg) ? 0 : feedbackAvg}</h4>
    </div>
  )
}

export default FeedbackStats
