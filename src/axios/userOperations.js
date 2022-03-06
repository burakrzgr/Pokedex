import axios from "axios"

const login = (userName,password) => {return axios.post("http://localhost:3001/user",formData,{headers: {'content-type': 'multipart/form-data'}});}
//const postImg = (name,img) => {return axios.post("http://localhost:3003/"+name ,img);}


export {login};