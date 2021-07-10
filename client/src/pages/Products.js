import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Carousel, Image } from 'react-bootstrap'
import Footer from '../components/Footer'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
  getProducts()
  },[])

  const getProducts = async ()=>{
  try{
  let res = await axios.get(`/api/products`)
  setProducts(res.data[0])
  }catch (err){
  alert('err check console')
  console.log(err)
}}

return(
  <div></div>
  )
}
export default Products