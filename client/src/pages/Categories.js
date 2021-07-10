import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Carousel, Image } from 'react-bootstrap'
import Footer from '../components/Footer'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(()=>{
  getCategories()
  },[])

  const getCategories = async ()=>{
  try{
  let res = await axios.get(`/api/categories`)
  setCategories(res.data[0])
  }catch (err){
  alert('err check console')
  console.log(err)
  }
}

return(
  <div></div>
  )
}
export default Categories