// taking action and act on that action then update the state according to that action
// then updated value of obj should be passed to the global store object

import {INC_COUNT,DEC_COUNT,ADD_TODO} from './action';




export const reducer = (store,{type,payload})=>{
    switch (type){
     
        case ADD_TODO:
            return{
                ...store,
                todos:payload
            }

            default:
                return store
    }
}

// store={reducer,{count:0,todos:[{},{},{}]}}