import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'

const FeedbackList = ({ feedbacks, handleDelete }) => {
  if (feedbacks.length === 0) {
    return <p>No feedbacks yet</p>
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity: 0}}
          >
            <FeedbackItem
              feedback={feedback}
              key={feedback.id}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
