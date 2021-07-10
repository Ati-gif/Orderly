import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Category from './Category'
import CategoryForm from './CategoryForm'


const Categories = (props) => {
  const {room_id} = props
  const [categories, setCategories] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    getCategories()
  },[])

  const getCategories = async () => {
    try{
      let res = await axios.get(`/api/rooms/${room_id}/categories`)
      setCategories(res.data.category)
    }catch (err){
      alert('err check console')
      console.log(err)
    }
  }

  const addCategory = (category) => {
    setCategories([category, ...categories])
  } 

  const editCategory = (category) => {
    setCategories( categories.map (i => i.id === categories.id ? category : i))
  }

  const deleteCategory = async (id) => {
    let res = await axios.delete(`/api/rooms/${room_id}/categories/${id}`)
    setCategories( categories.filter (category => category.id !== res.data.id))
  }

  const renderCategories = () => {
    return categories.map( category => {
      return (
        <Category key={category.id} {...category} room_id={room_id} editCategory={editCategory} deleteCategory={deleteCategory}/>
      )
    })
  }

  return(
    <div style={{textAlign: 'center'}}>
      <p></p>
      <button onClick={()=>setShowForm(!showForm)}>Add Category</button>
      <p></p>
      {showForm && <CategoryForm addCategory={addCategory} setShowForm={setShowForm} room_id={room_id}/>}
      {renderCategories()}
    </div>
  )
}

export default Categories
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Card, Carousel, Image } from 'react-bootstrap'

// const Categories = () => {
//   const [categories, setCategories] = useState([])

//   useEffect(()=>{
//   getCategories()
//   },[])

//   const getCategories = async ()=>{
//   try{
//   let res = await axios.get(`/api/categories`)
//   setCategories(res.data[0])
//   }catch (err){
//   alert('err check console')
//   console.log(err)
//   }
// }

// return(
//   <div>CAAAATS</div>
//   )
// }
// export default Categories
