// import React, {useState} from 'react'
// import Items from '../item/Items'
// import StoreForm from './StoreForm'

// const Rooms = (props) => {
//   const {id, name, editRoom, deleteRoom} = props
//   const [showForm, setShowForm] = useState(false)
//   const [showCategory, setShowCategory] = useState(false)

 

//   return(
//     <div>
//       <div>
//         <h2 >{name}</h2>
//         <h3></h3>
//         <h3></h3>
//         <button onClick={()=>setShowForm(!showForm)}>Edit Room</button>
//         <button onClick={()=>deleteRoom(id)}>Delete</button>
//         <p></p>
//       </div>
//       {showForm && <RoomForm {...props} editStore={editStore} setShowForm={setShowForm}/>}
//       <p></p>
//       <button onClick={()=>setShowItem(!showItem)}>View Items</button>
//       {showItem && <Items store_id={id}/>}
//       <p></p>
//     </div>
//   )
// }
// export default Rooms
