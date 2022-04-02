import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {updateTodo} from '../../redux/action'
import styled from 'styled-components';
import {Link} from 'react-router-dom';



const TodoBox = styled.div`
   margin:auto;
  disply:flex;
  flex-direction:column;
  height:fit-content;
  width:400px;
  padding:3vh;
 background-color:#85B3D1FF;
//  border-radius:10px;

`
const Card = styled.div`
    // background-color:#2460A7FF;
    background-color:${props=>props.theme?"#2460A7FF":"2460A7FF"};
    color:#B3C7D6FF;
    border-radius:29px;
    padding:2vh;
`;

const AllLinks = styled(Link)`
 text-decoration:none;
`
function TodoList() {
  const todoItems = useSelector((store)=>(store.todos));

  // console.log('this is just to see the whole todo array',todoItems)
  
  function UiDisplay(){
    fetch(`http://localhost:3001/todo`)
    .then((res)=>res.json())
    .then((res)=>dispatch(updateTodo(res)))
  }
  //  UiDisplay()
  useEffect(()=>{
       UiDisplay()
 },[])
  
  //  const dispatch = useDispatch();

  const dispatch = useDispatch();

  const handleDeleteItem=(id)=>{

    fetch(`http://localhost:3001/todo/${id}`,{
      method: 'DELETE',
    })
    .then((res)=>res.json())
    .then((res)=>UiDisplay())

    //  dispatch(removeTodo(id))
  }


  function toggle(id,status){
    console.log(id,status)
    fetch(`http://localhost:3001/todo/${id}`,{
      method: 'PATCH',
      headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({status:!status})
  })
    .then((res)=>res.json())
    .then((res)=>UiDisplay())
    .catch((err)=>console.log(err))
  }

  return (
    <>
      {
          todoItems.map((item)=>{
             return (
              <TodoBox key={item.id} >
                <Card theme={item.status}>
                  <p> {item.title} </p>
                  <p> {item.status?'completed':'pending'} </p>
                  <button onClick={()=>handleDeleteItem(item.id)}>Delete</button>
                  <button onClick={()=>toggle(item.id,item.status)}>{item.status?"Pending":"Complete"}</button>
                
                <AllLinks to={`/TodoList/${item.id}`}>
                  <button>more details</button>
                </AllLinks>

                  </Card>
             </TodoBox>
             )
          })
      }
    </>
  )
}

export default TodoList