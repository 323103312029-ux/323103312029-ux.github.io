import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="works-container">
        <h1>My Works</h1>
        <ul className="works-list">
          <li>
            <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">
              Project 1: Portfolio Website
            </a>
          </li>
          <li>
            <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer">
              Project 2: Blog Platform
            </a>
          </li>
          <li>
            <a href="https://example.com/project3" target="_blank" rel="noopener noreferrer">
              Project 3: E-commerce App
            </a>
          </li>
          {/* Add more works as needed */}
        </ul>
      </div>
    </>
  )
}

export default App
