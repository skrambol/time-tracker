import axios from "axios";

const baseUrl = "/api/projects/"

function getProjects() {
  const request = axios.get(baseUrl)

  return request.then(response => response.data)
}

export default {
  getProjects,
}
