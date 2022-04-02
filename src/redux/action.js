// type of the action
 
export const ADD_TODO = 'ADD_TODO';

 



// action creator function which returns an object

export const updateTodo = (payload)=>{
    return { 
        type:ADD_TODO,
      payload,
    }
}


// obj is basically {type:"INC_COUNT", payload:1}