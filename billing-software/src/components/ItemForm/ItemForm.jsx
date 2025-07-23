import React from "react";
const ItemForm = () => {
  return (
   <div className="item-form-container" style={{height:'100vh',overflowY:'auto',overflowX:'hidden'}}>
     <div className="mx-2 mt-2">
      <div className="row">
        <div className="card col-md-8 form-container">
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                <img src="https://placehold.co/48x48" alt="" width={48} />
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="form-control"
                hidden
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
              />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="category">
                    Category
                </label>
                <select name="category" id="category" className="form-control">
                    <option value="">--SELECT Category--</option>
                    <option value="category1">--SELECT 1--</option>
                    <option value="category2">--SELECT 2--</option>
                    <option value="category3">--SELECT 3--</option>
                
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">
                    Price
                </label>
                <input type="number" name="price" className="form-control" placeholder="&#8377;200.00"/>
            </div>
            <div className="mb-3">
              <label htmlFor="decription" className="form-label">
                Description
              </label>
              <textarea
                rows="2"
                name="decription"
                id="decription"
                className="form-control"
                placeholder="Write Content here..."
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-warning w-100">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ItemForm;
