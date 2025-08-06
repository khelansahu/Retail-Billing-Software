import React, { useContext, useState } from 'react'
import "./DisplayItem.css"
import { AppContext } from './../../context/AppContext';
import Item from '../Item/Item';
import SearchBox from '../SearchBox/SearchBox';
const DisplayItem = ({selectedCategory}) => {
  const {item} = useContext(AppContext);
  const [searchText,setSeachText]=useState("");
  const filteredItems=item.filter(item=>{
  //  return item.name.toLowerCase().includes(searchText.toLowerCase());
  if(!selectedCategory) return true;
  // console.log(item)
  // console.log(item.category.categoryId)
  return item.category.categoryId===selectedCategory;
  }).filter(item=>item.name.toLowerCase().includes(searchText.toLowerCase()));
  // console.log(selectedCategory)
  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center align-items">
        <div></div>
        <div>
          <SearchBox onSearch={setSeachText}/>
        </div>
      </div>
      <div className="row g-3">
{filteredItems.map((item,index)=>(
  <div key={index} className="col-md-4 col-sm-6">
    <Item
    itemName={item.name}
    itemPrice={item.price}
    itemImage={item.imgUrl}
    itemId={item.itemId}
    />
  </div>
))}
      </div>
    </div>
  )
}

export default DisplayItem