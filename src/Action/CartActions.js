import {ADD,REM,REDIRECT_CART} from './ActionTypes';

export const addToCart =(name)=>{
    console.log("dispatch inside the add action",name)
   return{ 
       type:ADD,
       name
   }
}



export const removeItem =(name)=>{
    return{ 
        type:REM,
        name
    }
 }

 export const redirectCart =(redirect)=>{
    return{ 
        type:REDIRECT_CART,
        redirect
    }
 }



