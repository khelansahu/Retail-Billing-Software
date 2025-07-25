import React from "react";

const UserForm = () => {
  return (
    <div className="mx-2 mt-2">
      <div className="row">
        <div className="card col-md-8 form-container">
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Jhon Doe"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="yourname@example.com"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Email
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="*******"
              ></input>
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
  );
};

export default UserForm;
