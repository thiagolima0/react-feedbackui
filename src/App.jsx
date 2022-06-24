import { useState } from 'react'
import AppHeader from './components/AppHeader'
import FeedbakData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbakData)

  return (
    <>
      <AppHeader />
      <div className="container">
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </>
  )
}

export default App
