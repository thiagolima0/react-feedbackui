import AppCard from "./shared/AppCard"

const FeedbackItem = ({ feedback }) => {
  return (
    <AppCard>
      <div className="num-display">{feedback.rating}</div>
      <div className="text-display">{feedback.text}</div>
    </AppCard>
  )
}

export default FeedbackItem
