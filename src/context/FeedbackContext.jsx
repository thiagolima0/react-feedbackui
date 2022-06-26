import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      text: 'hello world',
      rating: 10,
    },
  ])

  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((item) => item.id !== id))
  }

  const addFeedback = (rating) => {
    setFeedbacks([rating, ...feedbacks])
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        deleteFeedback,
        addFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
