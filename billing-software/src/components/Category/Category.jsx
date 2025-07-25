import React, { useContext } from 'react'
import "./Category.css"
import { AppContext } from '../../context/AppContext';


const Category = ({categoryName,imgUrl,numberOfItems,bgColor,categoryId,isSelected,onClick}) => {
const {category,item} = useContext(AppContext);
const numberOfItem=item.filter(item=>item.category.categoryId===categoryId).length;


  return (
  <div className="d-flex align-items-center p-3 rounded gap-2 position-relative category-hover"
  style={{backgroundColor:bgColor,cursor:'pointer'}}
  onClick={onClick}>
    

    <div
    style={{position:'relative', marginRight:'10px'}}>
      <img  src={`data:image/jpeg;base64,${imgUrl}`} alt={categoryName} className='category-image' />
    </div>
    <div>
      <h6 className="text-white mb-0">
        {categoryName}
      </h6>
      <p className='text-white.mb-0'>{numberOfItem} items</p>
    </div>
{isSelected && <div className='active-category'></div>}
  </div>  )
}

export default Category