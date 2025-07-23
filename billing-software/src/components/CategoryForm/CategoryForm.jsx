import React, { useContext, useEffect, useState,useRef } from "react";
import upload from "../../assets/upload.png";
import {
  addCategory,
  getCategoryById,
  uploadImage,
} from "./../../Service/CategoryService";
import { AppContext } from "./../../context/AppContext";
import toast from "./../../../node_modules/react-hot-toast/src/index";
import { addCategoryWithImage } from "./../../Service/CategoryService";

const CategoryForm = () => {
  const { category, setCategory } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(false);
  const fileInputRef=useRef(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    bgColor: "#000000",
  });
  useEffect(() => {
    console.log(data);
  }, [data]);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((data) => ({ ...data, [name]: value }));
  };

const onSubmitHandler = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const formData = new FormData();
    formData.append("categoryEntity", new Blob([JSON.stringify(data)], { type: "application/json" }));

    if (image) {
      formData.append("file", image);
    }

    const response = await addCategoryWithImage(formData);

    if (response.status === 200 || response.status === 201) {
      const savedCategory = response.data.data;
      setCategory((prev) => [...prev, savedCategory]);

      if (image) {
      toast.success("Category added successfully with image");
        
      }else{
      toast.success("Category added successfully without image");

      }

      // Reset form
      setData({ name: "", description: "", bgColor: "#000000" });
      setImage(false);
    }
  } catch (error) {
    toast.error("Error in adding category with image");
    console.error(error);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="mx-2 mt-2">
      <div className="row">
        <div className="card col-md-12 form-container">
          <div className="card-body">
            <form onSubmit={onSubmitHandler}>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img
                    src={image ? URL.createObjectURL(image) : upload}
                    alt=""
                    width={48}
                  />
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="form-control"
                  hidden
                  ref={fileInputRef}
                  onChange={(e)=>{
                    if (e.target.files.length>0) {
                      setImage(e.target.files[0])
                    }
                    e.target.value = null; }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Category Name"
                  onChange={onChangeHandler}
                  value={data.name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="decription" className="form-label">
                  Description
                </label>
                <textarea
                  rows="5"
                  name="description"
                  id="description"
                  className="form-control"
                  placeholder="Write Content here..."
                  onChange={onChangeHandler}
                  value={data.description}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="bgcolor" className="form-label">
                  background Color
                </label>
                <br />
                <input
                  type="color"
                  name="bgColor"
                  id="bgcolor"
                  placeholder="#ffffff"
                  onChange={onChangeHandler}
                  value={data.bgColor}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-warning w-100"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryForm;