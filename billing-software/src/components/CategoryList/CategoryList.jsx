import React, { useContext, useState } from "react";
import { AppContext } from "./../../context/AppContext";
import "./Category.css";
import { CiSearch } from "react-icons/ci";
import { deleteCategory } from "../../Service/CategoryService";
import toast from "./../../../node_modules/react-hot-toast/src/index";
import { MdDelete } from "react-icons/md";


const CategoryList = () => {
  const { category, setCategory,item } = useContext(AppContext);
  const [searchString, setSearchString] = useState("");

  const filterCategory = category.filter((category) =>
    category.name?.toLowerCase().includes(searchString.toLowerCase())
  );

  const deletByCategoryId = async (categoryId) => {
    try {
      const response = await deleteCategory(categoryId);
      if (response.status == 202) {
        const updatedCategory = category.filter(
          (category) => category.categoryId !== categoryId
        );
        setCategory(updatedCategory);
        // displaying toast message
        toast.success("Category deleted");
      } else {
        // displaying error toast message
        toast.error("Unable to delete category");
      }
    } catch (error) {
      console.error(error);
      // displaying error toast message
      toast.error("Unable to delete category");
    }
  };

  // console.log(category)
  return (
    <div
      className="category-list-container"
      style={{ height: "100vh", overflowY: "auto", overflowX: "hidden" }}
    >
      <div className="row pe-2">
        <div className="input-group mb-3">
          <input
            type="text"
            name="keyword"
            placeholder="Search by keyword"
            className="form-control"
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
            value={searchString}
          />
          <span className="input-group-text bg-warning">
            <CiSearch />
          </span>
        </div>
      </div>
      <div className="row g-3 pe-2">
        
        {filterCategory.map((category, index) => {
  // Count items where category.categoryId matche
  const itemCount = item.filter(it => it.category.categoryId === category.categoryId).length;
  return (
    <div key={index} className="col-12">
      <div className="card p-3" style={{ backgroundColor: category.bgColor }}>
        <div className="d-flex align-items-center">
          <div style={{ marginRight: "15px" }}>
            <img
              src={`data:image/jpeg;base64,${category.imgUrl}`}
              alt={category.name}
              className="category-image"
            />
          </div>
          <div className="flex-grow-1">
            <h5 className="mb-1 text-white">{category.name}</h5>
            {/* item count  */}
            <p className="mb-0 text-white">{itemCount} Items</p>
          </div>
          <div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deletByCategoryId(category.categoryId)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
})}

      </div>
    </div>
  );
};

export default CategoryList;
