import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Carousel, Image } from 'react-bootstrap'

const Rooms = () => {
  const [rooms, setRooms] = useState([])

  useEffect(()=>{
  getRooms()
  },[])

  const getRooms = async ()=>{
  try{
  let res = await axios.get(`/api/rooms`)
  setRooms(res.data[0])
  }catch (err){
  alert('err check console')
  console.log(err)
  }
}

return(
  <div>ROOOOOMS</div>
  )
}
export default Rooms