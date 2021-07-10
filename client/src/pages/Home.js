// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import {Card, Image} from 'react-bootstrap'
// import orderlyImg from '../images/Orderly.png'
// import PrintThisComponent from '../pages/Print';
// import axios from "axios";
// export default () => {
//   const { name} = useContext(AuthContext);
//   const [rooms, setRooms] = useState([])

//   useEffect(()=>{
//     getRooms()
//   },[])

//   const getRooms = async () => {
//     try{
//       let res = await axios.get(`/api/rooms`)
//       setRooms(res.data)
//       console.log(res.data)
//     }catch (err){
//       alert('err check console')
//       console.log(err)
//     }
//   }
//   const renderRooms = () => {
//     return rooms.map(room => {
//       return (
//         <h1>{room.name}</h1>
//       )
//     })
//   }
//   const showRooms = () => {
//     return rooms.show(rewm => {
//       return (
//         <h1>{rewm.id}</h1>
//       )
//     })
//   }

//   return (
//     <div>
//     <Card className="text-center"style={{display: 'flex'}}>
//       <Card.Body>
//         <Image src={orderlyImg} fluid />
//         {renderRooms()}
//       </Card.Body>
//     </Card>
//     <div class="card" style="width: 18rem;">
//       <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text"></p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//     </div>
//     <PrintThisComponent />
//   </div>
    
//   );
// };
