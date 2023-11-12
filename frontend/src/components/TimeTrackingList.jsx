function TimeTrackingDetail({timeTracking}) {
  return (
    <div className="border p-1">
      <p>{timeTracking.date}</p>
      <p>{timeTracking.hours} hours</p>
      <p className="italic">{timeTracking.description}</p>
    </div>
  )
}


export default function TimeTrackingList({projects}) {
  return projects.map(project => {
    return (
      <div key={project.id} className="border p-1">
        <div className="flex-shrink-0 p-4">
          <p className="text-xl font-bold">{project.name}</p>
          <p>{project.description}</p>
          <p className="mb-2">worked a total of {project.totalHours} hours</p>
          <div className="flex flex-col gap-2">
            {project.timeTrackings.map(t => <TimeTrackingDetail key={`${project.id}-${t.id}`} timeTracking={t} />)}
          </div>
        </div>
      </div>
    )
  })
}
