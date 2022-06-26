import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedbacks, setFeedbacks] = useState([])
  const [feedbacksDetail, setFeedbacksDetail] = useState({})
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await (
      await fetch('/feedback?_sort=id&_order=desc')
    ).json()
    setFeedbacks(response)
    setIsLoading(false)
  }

  const deleteFeedback = async (id) => {
    await fetch(`feedback/${id}`, {
      method: 'DELETE',
    })

    fetchFeedback()
  }

  const fetchFeedbackById = async (id) => {
    const response = await (await fetch(`/feedback/${id}`)).json()

    setFeedbacksDetail(response)
  }

  const addFeedback = async (rating) => {
    await fetch('/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rating),
    })

    fetchFeedback()
  }

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true })
  }

  const updateFeedback = async (id, newFeedback) => {
    await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeedback),
    })

    fetchFeedback()
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        deleteFeedback,
        isLoading,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        feedbacksDetail,
        fetchFeedbackById,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
