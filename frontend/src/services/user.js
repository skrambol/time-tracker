import axios from "axios";

const baseUrl = "/api/users/"

function getUsers() {
  const request = axios.get(baseUrl)

  return request.then(response => response.data)
}

function addTimeTracking({project, user, date, hours, description}) {
  const request = axios.post(`${baseUrl}${user}/time_tracking`, {project, date, hours, description})

  return request.then(response => response.data)
}

export default {
  getUsers,
  addTimeTracking,
}
