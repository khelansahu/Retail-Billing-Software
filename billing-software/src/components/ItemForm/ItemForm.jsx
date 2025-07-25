import React, { useState, useRef, useContext } from "react";
import upload from "../../assets/upload.png";
import { assests } from "./../../assets/assests";
import { AppContext } from "../../context/AppContext";
import { addItem } from "../../Service/ItemService";
import toast from "./../../../node_modules/react-hot-toast/src/index";
const ItemForm = () => {
  const { item,setItem,category } = useContext(AppContext);
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
  });

  const onChangeHandler = async (e) => {
    const value=e.target.value;
    const name=e.target.name
    setData((data)=>({...data, [name]:value}));
  };
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    setLoading(true);
    try{
      const formData = new FormData();
      formData.append("itemEntity",new Blob([JSON.stringify(data)],{type:"application/json"}));

      if (image) {
        formData.append("file",image);
      }

      const response=await addItem(formData);

      if (response.status===200 || response.status===201) {
        const savedItem=response.data.data;
        setItem((prev)=>[...prev,savedItem]);

        //TODO upadte the category state for counting...
        
        if (image) {
              toast.success("item added successfully with image");
                
              }else{
              toast.success("item added successfully without image");
      }

      // reset form
      setData({name:"",description:"",price:"",categoryId:""});
      setImage(false);
    }else{
      toast.error("unable to add item..")
    }
    }catch(error){
      toast.error("Error in adding item");
    }finally{
      setLoading(false);
    }

  };
  return (
    <div
      className="item-form-container"
      style={{ height: "100vh", overflowY: "auto", overflowX: "hidden" }}
    >
      <div className="mx-2 mt-2">
        <div className="row">
          <div className="card col-md-12 form-container rounded-3">
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
                    onChange={(e) => {
                      if (e.target.files.length > 0) {
                        setImage(e.target.files[0]);
                      }
                      e.target.value = null;
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Item Name"
                    onChange={onChangeHandler}
                    value={data.name}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="category">
                    Category
                  </label>
                  <select
                    name="categoryId"
                    id="category"
                    className="form-control"
                    onChange={onChangeHandler}
                    value={data.categoryId}
                  >
                    <option value="">Select Category</option>
                    {category.map((category, index) => (
                      <option key={index} value={category.categoryId}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="form-control"
                    placeholder="&#8377;200.00"
                    onChange={onChangeHandler}
                    value={data.price}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    rows="1"
                    name="description"
                    id="description"
                    className="form-control"
                    placeholder="Write Content here..."
                    onChange={onChangeHandler}
                    value={data.description}
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-warning w-100"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemForm;
