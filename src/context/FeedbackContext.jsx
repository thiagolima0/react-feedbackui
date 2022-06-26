import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      text: 'lorem ipsum',
      rating: 9,
    },
    {
      id: 2,
      text: 'lorem ipsum 2',
      rating: 6,
    },
    {
      id: 3,
      text: 'lorem ipsum 3',
      rating: 7,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const deleteFeedback = (id) => {
    setFeedbacks(feedbacks.filter((item) => item.id !== id))
  }

  const addFeedback = (rating) => {
    setFeedbacks([rating, ...feedbacks])
  }

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true })
  }

  const updateFeedback = (id, newFeedback) => {
    setFeedbacks(feedbacks.map(item => (item.id === id ? {...item, ...newFeedback} : item)))
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
