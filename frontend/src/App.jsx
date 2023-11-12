import { useEffect, useState } from 'react'
import './App.css'
import projectService from './services/project'
import userService from './services/user'

function App() {
  const [projects, setProjects] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    projectService.getProjects()
      .then(result => setProjects(result))

    userService.getUsers()
      .then(result => setUsers(result))
  },[])

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold'>Time Tracker</h1>
    </div>
  )
}

export default App
