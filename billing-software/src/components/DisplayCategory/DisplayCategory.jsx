import React from 'react'
import "./DisplayCategory.css"
import Category from '../Category/Category.jsx'

const DisplayCategory = ({category,selectedCategory,setSelectedCategory}) => {
  return (
    <div className="row g-3" style={{width:"100%",margin:0}}>
{category.map(category=>(
  <div key={category.categoryId} className="col-lg-4  col-md-6" style={{padding:'0 10px'}}>
      <Category 
      categoryName={category.name}
      imgUrl={category.imgUrl}
      numberOfItems={category.items}
      bgColor={category.bgColor}
      categoryId={category.categoryId}
      isSelected={selectedCategory===category.categoryId}
      onClick={()=>setSelectedCategory(category.categoryId)}

      />
  </div>
))}
    </div>
  )
}

export default DisplayCategory