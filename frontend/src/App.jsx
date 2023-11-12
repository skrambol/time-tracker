import { useEffect, useState } from "react"
import "./App.css"
import projectService from "./services/project"
import userService from "./services/user"
import Dropdown from "./components/Dropdown"
import Notification from "./components/Notification"

function App() {
  const [projects, setProjects] = useState([])
  const [users, setUsers] = useState([])
  const [notification, setNotification] = useState({message: "", severity: "info"})

  useEffect(() => {
    projectService.getProjects()
      .then(result => setProjects(result))

    userService.getUsers()
      .then(result => {
          const allUsers = result.map(user => { return { ...user, name: user.username }})

          return setUsers(allUsers)
      })
  },[])

  function submitTimeTracking(event) {
    event.preventDefault()
    const project = parseInt(event.target[0].value)
    const user = event.target[1].value
    const date = event.target[2].value
    const hours = parseInt(event.target[3].value)
    const description = event.target[4].value

    function showNotification({message, severity}) {
      setNotification({message, severity})

      setTimeout(() => {

        setNotification({message: null, severity: 'error'})
      }, 3000);
    }

    userService.addTimeTracking({project, user, date, hours, description})
      .then(newTimeTracking => {
        showNotification({message: "Successfully added time tracking.", severity: "info"})
      })
      .catch(error => {
        showNotification({message: error.message, severity: "error"})
      })
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">Time Tracker</h1>
      <div className="mt-4">
        <form className="flex flex-col gap-4" onSubmit={submitTimeTracking}>
          <Dropdown label="Project" name="project" options={projects}/>
          <Dropdown label="User" name="user" options={users}/>
          <div>
            <label htmlFor="date">
              Date: {" "}
            </label>
            <input type="date" name="date" required defaultValue={new Date().toISOString().slice(0, 10)} className="border p-1"/>
          </div>
          <div>
            <label htmlFor="hours">
              Hours: {" "}
            </label>
            <input type="number" name="hours" required min={1} max={24} className="border p-1"/>
          </div>
          <div>
            <label htmlFor="description">
              Description: {" "}
            </label>
            <input type="text" name="description" placeholder="(optional)" className="border p-1"/>
          </div>
          <div>
            <input type="submit" value="Submit" className="border rounded bg-neutral-300 hover:bg-neutral-200 p-2"/>
          </div>
          <Notification message={notification.message} severity={notification.severity}/>
        </form>
      </div>
    </div>
  )
}

export default App
