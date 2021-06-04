
import axios from "axios";
import '../config'

const API_KEY = process.env.ACCESS_KEY?process.env.ACCESS_KEY:'8DGjqlBwKIOIUX6coH24WkOlOCEwyWIGZNtKxwDw-K4'
const API_BASE = 'https://api.unsplash.com/'



export const getCollection = async()=>
      axios.get(`${API_BASE}/photos/?client_id=${API_KEY}`)

export const searchPhoto= async (keywords,page)=>
      axios.get(`${API_BASE}/search/photos?page=${page}&query=${keywords}&client_id=${API_KEY}`)
