import {useState} from 'react'
import axios from 'axios'

const CategoryForm = (props) => {
    
    const { id, addCategory, editCategory } = props
    const [name, setName] = useState(props.name ? props.name : '')
    const [room, setRoom] = useState(props.room ? props.room:'')

    const getCategoryName = () =>{
      return id ? 'EditForm' : 'New Form'
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let category = {name, room } 
        console.log(category)
        if(id){
            let res = await axios.put(`/api/categories/${id}`, {name, room})
            console.log(res)
            editCategory(res.data)
        } else {
            let res = await axios.post('/api/categories', {name, room})
            console.log(res.data) 
            addCategory(res.data)
        }
    }
    return(
        <>
          <h1>{getCategoryName()}</h1>
          <form onSubmit={handleSubmit}>
              <p>Change Category Name</p>
              <input value={name} onChange={(e)=> setName(e.target.value) } /> 
              <p>Change Category Room</p>
              <input value={room} onChange={(e)=> setRoom(e.target.value) } /> 
              <br /> 
              <button type={'submit'}>{id ? 'update': 'add'}</button>
          </form>
        </>
    )
}
export default CategoryForm
