import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold'>Time Tracker</h1>
    </div>
  )
}

export default App
