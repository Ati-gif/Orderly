// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Card, Carousel, Image } from 'react-bootstrap'

// const Products = () => {
//     const [products, setProducts] = useState([])

//     useEffect(()=>{
//     getProducts()
//     },[])

//     const getProducts = async ()=>{
//     try{
//     let res = await axios.get(`/api/products`)
//     setProducts(res.data[0])
//     }catch (err){
//     alert('err check console')
//     console.log(err)
//   }}
//   // create_table "products", force: :cascade do |t|
//   // t.string "name"
//   // t.string "image"
//   // t.float "price"
//   // t.text "description"
//   // t.boolean "shopping_list"
//   const renderProducts = () => {
//     return products.map(test=> {
//       return (
//         //each child in a list needs to have a unique key.
//         <div key={products.id}>
//             <h1>Products</h1>
//             <h2>{products.name}</h2>
//             <h2>{products.image}</h2>
//             <h3>{products.price}</h3>
//             <h3>{products.description}</h3>
//             <h3>{products.shopping_list}</h3>
//             {renderProducts()}
//         </div>
//       )
//     })
//   }}

//   export default Products