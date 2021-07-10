import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    getProducts()
  },[])

  const getProducts = async () => {
    try{
      let res = await axios.get(`/api/categories/:category_id/products`)
      setProducts(res.data)
    }catch (err){
      alert('err check console')
      console.log(err)
    }
  }

  const renderProducts = () => {
    return products.map(product=> {
      return (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <h4>{product.image}</h4>
          <h4>{product.price}</h4>
          <h4>{product.description}</h4>
          <h4>{product.shopping_list}</h4>
        </div>
      )
    })
  }
      
      return(
        <div style={{textAlign: 'center'}}>
      <h1>Products</h1>
      {renderProducts()}
      </div>
      )
    }

export default Products