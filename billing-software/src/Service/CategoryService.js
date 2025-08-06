import axios from "axios";
export const addCategory = async (category) => {
  return await axios.post('http://localhost:8080/addcategory', category);
};

export const addCategoryWithImage=async(category)=>{
  return await axios.post('http://localhost:8080/addcategorywithimage',category)
}


export const deleteCategory=async(categoryId)=>{
   return await axios.delete(`http://localhost:8080/${categoryId}`);
};

export const fetchCategories=async()=> {
    return await axios.get("http://localhost:8080/fetchgategory");
};

export const uploadImage = async (categoryId, formData) => {
  return await axios.put(`http://localhost:8080/uploadimage/${categoryId}`, formData);
};

export const getCategoryById = (categoryId) => {
  return axios.get(`http://localhost:8080/categories/${categoryId}`);
};

