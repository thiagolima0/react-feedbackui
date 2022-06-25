import { useState } from 'react'
import AppHeader from './components/AppHeader'
import FeedbakData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbakData)

  const handleList = (id) => {
    setFeedbacks(feedbacks.filter(item => item.id !== id))
  }

  return (
    <>
      <AppHeader />
      <div className="container">
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList feedbacks={feedbacks} handleDelete={(id) => handleList(id)} />
      </div>
    </>
  )
}

export default App
