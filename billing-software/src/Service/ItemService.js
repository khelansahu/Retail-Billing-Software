import axios from "axios";

export const addItem=async(item)=>{
    return await axios.post('http://localhost:8080/additem',item)
}

export const fetchItem=async()=>{
    return await axios.get('http://localhost:8080/fetchitems');
}

export const deleteItem=async (itemId) => {
    return await axios.delete(`http://localhost:8080/deleteitem/${itemId}`);
}