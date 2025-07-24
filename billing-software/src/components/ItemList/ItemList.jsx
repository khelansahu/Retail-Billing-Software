import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AppContext } from "../../context/AppContext";
import "./ItemList.css";
import { MdDelete } from "react-icons/md";
import { deleteItem } from "../../Service/ItemService";
import toast from "./../../../node_modules/react-hot-toast/src/index";

const ItemList = () => {
  const { item, setItem } = useContext(AppContext);
  const [searchString, setSearchString] = useState("");

  const filterItem = item.filter((item) =>
    item.name?.toLowerCase().includes(searchString.toLowerCase())
  );
  //todo console.log(item);

  const deleteItemById = async (itemId) => {
    try {
      const response = await deleteItem(itemId);
      if (response.status === 200 || response.status === 202) {
        const updatedItem = item.filter((item) => item.itemId !== itemId);
        setItem(updatedItem);
        toast.success("Item deleted.");
      } else {
        toast.error("Unable to delete item");
      }
    } catch (error) {
      console.error(error);
      toast.error("Unable to delete item");
    }
  };

  return (
    <div
      className="category-list-container"
      style={{ height: "100vh", overflowX: "hidden", overflowY: "auto" }}
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
        {filterItem.map((item, index) => (
          <div key={index} className="col-12">
            <div
              className="card p-3 "
              style={{ backgroundColor: item.category.bgColor }}
            >
              <div className="d-flex align-items-center">
                <div style={{ marginRight: "15px" }}>
                  <img
                    src={`data:image/jpeg;base64,${item.imgUrl}`}
                    alt={item.name}
                    className="item-image"
                  />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-1 text-white">{item.name}</h6>
                  <p className="mb-0 text-white">
                    Category : {item.category.name}
                  </p>
                  <span className="mb-0 text-block badge rounded-pill text-bg-warning">
                    &#8377;{item.price}
                  </span>
                </div>
                <div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteItemById(item.itemId)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
