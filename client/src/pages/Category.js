import React, {useState} from 'react'
import CategoryForm from './CategoryForm'

const Category = (props) => {
  const {id, name, room, deleteCategory, editCategory} = props
  const [showForm, setShowForm] = useState(false)

  return (
    <div>
      <h3>{name}</h3>
      <h4>{room}</h4>
      <button onClick={()=>setShowForm(!showForm)}>Edit Item</button>
      <button onClick={()=>deleteCategory(id)}>Delete</button>
      <p></p>
      {showForm && <CategoryForm {...props} editCategory={editCategory} setShowForm={setShowForm}/>}
      <p></p>
    </div>
  )
}


export default Category
