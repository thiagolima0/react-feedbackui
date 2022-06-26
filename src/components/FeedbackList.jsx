import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { ClipLoader } from 'react-spinners'

const FeedbackList = () => {
  const { feedbacks, isLoading } = useContext(FeedbackContext)

  if (!isLoading && (feedbacks.length === 0 || !feedbacks)) {
    return <p>No feedbacks yet</p>
  }

  return isLoading ? (
    <div className="container loading">
      <ClipLoader color="#fffff" loading={true} size={100} />
    </div>
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem feedback={feedback} key={feedback.id} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
export default FeedbackList
