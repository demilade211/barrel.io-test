import axios from 'axios'; 

const apiUrl = "http://localhost:3000/";

// Create an instance of Axios with a base URL
const instance = axios.create({
  baseURL: `${apiUrl}`, // Replace with your base URL 
}); 



export default instance