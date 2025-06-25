import axios from "axios";

export const api = axios.create({
  baseURL: "https://event-snap-backend-kgoc.onrender.com",
});
