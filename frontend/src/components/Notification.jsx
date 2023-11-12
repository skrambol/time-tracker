export default function Notification({ message, severity }) {
  if (message === null) {
    return null
  }

  return (
    <div className={severity}>
      {message}
    </div>
  )
}
