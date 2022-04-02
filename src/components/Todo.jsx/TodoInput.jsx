import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {updateTodo} from '../../redux/action';
import styled from 'styled-components';


const InputBox = styled.input`
 width:280px;
 padding:2vh;
 font-size:3vh;
 color:#2460A7FF;
 background-color:#B3C7D6FF;
 margin-top:10px;
 margin-bottom:10px;
 border-radius:2vh;
 `;
 const AddButton = styled.button`
//  color:#FEE715FF;
 font-size:3vh;
//  background-color:#101820FF;
 width:80px;
 height:50px;
 margin-bottom:10px;
 margin-top:10px;
 border:0px;
 border-radius:2vh;
 color:#2460A7FF;
 background-color:#B3C7D6FF;
 `

function TodoInput() {
    const [value,setValue] = useState('');
     const dispatch = useDispatch();

    //  const all_Todos = useSelector((state)=>state.todos);
    //  console.log(all_Todos)

    function UiDisplay(){
      fetch(`http://localhost:3001/todo`)
      .then((res)=>res.json())
      .then((res)=>dispatch(updateTodo(res)))
    }


     const handleAdd=()=>{

       const obj ={
           title:value,
           status:false
       }
        
       fetch(`http://localhost:3001/todo`,{
         method: 'POST',
         body: JSON.stringify(obj),
         headers: { 'Content-Type': 'application/json'}
       }).then((res)=>res.json()).then((res)=>UiDisplay());


       setValue('');
    }

  return (
    <div>
      <InputBox type="text" 
        placeholder="add something.."
        onChange={(e)=> setValue(e.target.value)}
        value={value}/>
      <AddButton onClick={value!==''?handleAdd:console.log(value)}>+</AddButton>
    </div>
  )
}

export default TodoInput