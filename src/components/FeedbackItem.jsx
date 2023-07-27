import PropTypes from 'prop-types'
import { useState } from 'react'

import { FaTimes } from 'react-icons/fa'

import Card from './shared/Card'
import FeedbackList from './FeedbackList'

function FeedbackItem({ item, handleDelete }) {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example of the feedback item')

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        onClick={() => handleDelete(item.id)}
        className="close"
      >
        <FaTimes color="pruple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

FeedbackItem.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackItem
