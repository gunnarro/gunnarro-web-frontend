// rest support
import axios from "axios";

// When you add the headers to your axios request, the request becomes a "non-simple" request and the browser performs a preflight request before the actual request.
// This preflight request is an OPTIONS request that checks if the CORS protocol is understood and if the actual request is safe to send.
//
// config axios with todo rest service properties, user and pwd should not be placed here, still in react learning mode.
export const TodoRestApi = axios.create({
  baseURL: "https://localhost:9999/todoservice/v1",
  timeout: 50000,
  auth: {
      username: 'my-service-name',
      password: 'change-me'
  },
  headers: {
    "Cache-Control": "no-cache",
    'Content-Type': 'application/json; charset=utf-8',
  }
});