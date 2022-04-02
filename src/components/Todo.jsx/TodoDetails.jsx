import React, { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom'

function TodoDetails() {
        let {id} = useParams();
        let [data,setData] = useState([])
        // console.log(id)

        useEffect(()=>{
          fetch(`http://localhost:3001/todo/${id}`)
          .then((res)=>res.json())
          .then((res)=>setData(res))
        },[])
  return (
    <div>
       <h1>{data.title}</h1>
       <h1>{data.id}</h1>
       <h1>{data.status ? "completed" : "pending"}</h1>
    </div>
  )
}

export default TodoDetails