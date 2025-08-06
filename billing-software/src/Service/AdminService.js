import axios from "axios"

export const adminLogin=async(admin)=>{
    return await axios.post('http://localhost:8080/login',admin);
};