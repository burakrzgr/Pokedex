import axios from "axios"

const fetchImg = (name) => {return axios.get("http://localhost:3002/photos/"+name);}
const postImg = (name,img) => {return axios.post("http://localhost:3002/"+name ,img);}


export {fetchImg,postImg};