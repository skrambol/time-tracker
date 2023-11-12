import { useEffect, useState } from "react"
import "./App.css"
import projectService from "./services/project"
import userService from "./services/user"
import TimeTrackingForm from "./components/TimeTrackingForm"
import TimeTrackingList from "./components/TimeTrackingList"

function App() {
  const [projects, setProjects] = useState([])
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [timeTrackings, setTimeTrackings] = useState([])
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

  function getTimeTrackings(event) {
    const selectedUser = event.target.value

    userService.getTimeTrackings({user: selectedUser})
      .then(result => {
        const foo = result.reduce(
          (acc, current) => {
            const project = projects.find(p => p.id === current.project)

            if (acc.length > 0) {
              const latestProject = acc[acc.length-1]

              if (project.id === latestProject.id) {
                latestProject.timeTrackings = latestProject.timeTrackings.concat(current)
                latestProject.totalHours += current.hours

                acc[acc.length-1] = latestProject
                return acc
              }
            }

            return acc.concat({...project, timeTrackings: [current], totalHours: current.hours})
          },
          []
        )

        setUser(users.find(u => u.id == selectedUser))
        setTimeTrackings(foo)
      })
      .catch(error => {})

  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold">Time Tracker</h1>
      <TimeTrackingForm projects={projects} users={users} notification={notification} submitTimeTracking={submitTimeTracking}/>
      <br/>
      <br/>
      <br/>

      <h1 className="text-3xl font-bold">Time Tracking per User</h1>
      <div>
        <div>
          <select name="user" className="p-1" onChange={getTimeTrackings}>
            <option disabled defaultValue={"(select a user)"} selected>(select a user)</option>
            {users.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <h2 className="text-2xl">{user.username} ({user.first_name} {user.last_name})</h2>
          <TimeTrackingList projects={timeTrackings}/>
        </div>
      </div>
    </div>
  )
}

export default App
