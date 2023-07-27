import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'

import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'
import Post from './components/Post'

import AboutPage from './pages/AboutPage'

import FeedbackProvider from './context/FeedbackContext'

import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
    console.log(setFeedback)
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    // <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route
            path="/about"
            Component={AboutPage}
          />
          <Route
            path="/post/*"
            Component={Post}
          />
        </Routes>

        {/* <Card>
          <NavLink
            to="/"
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="active"
          >
            About
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="active"
          >
            Post
          </NavLink>
        </Card> */}

        <AboutIconLink />
      </div>
    </Router>
    // </FeedbackProvider>
  )
}

export default App
