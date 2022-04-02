import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {incCount,decCount} from '../../redux/action';


function Counter() {
    // useSelector is just to get the value from global store
    // now you have the whole store what you want to access it's upto you.
  const count = useSelector((store) => store.count);
  

  // useDispatch is for envoke  the reducer function
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={()=>(dispatch(incCount(1)))}>+</button>
      <button onClick={()=>(dispatch(decCount(1)))}>-</button>
    </div>
  );
}

export default Counter;
