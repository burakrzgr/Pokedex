import axios from "axios"

const postImg = (formData) => {return axios.post("http://localhost:3003/upload",formData,{headers: {'content-type': 'multipart/form-data'}});}
//const postImg = (name,img) => {return axios.post("http://localhost:3003/"+name ,img);}


export {postImg};