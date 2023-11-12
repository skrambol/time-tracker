import Dropdown from "./Dropdown"

function Notification({ message, severity }) {
  if (message === null) {
    return null
  }

  return (
    <div className={severity}>
      {message}
    </div>
  )
}

export default function TimeTrackingForm({projects, users, notification, submitTimeTracking}) {
  return (
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
  )
}
