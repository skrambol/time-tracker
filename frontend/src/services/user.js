import axios from "axios";

const baseUrl = "/api/users/"

function getUsers() {
  const request = axios.get(baseUrl)

  return request.then(response => response.data)
}

export default {
  getUsers,
}
