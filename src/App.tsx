import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ExamComponent from './components/ExamComponent'
import HomeComponent from './components/HomeComponent'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/test" element={<ExamComponent />} />
      </Routes>
    </Router>
  )
}

export default App
