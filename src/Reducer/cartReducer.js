import { stat } from "fs";
import {ADD,REM,REDIRECT_CART,BUY} from '../Action/ActionTypes';

const initState={
    items:[
        
    ],
    total:0,
    showHideProductDisplay:true,
    buyaction:false
}

const cartReducer=(state=initState, action)=>{
    console.log("inside reducer ",action)
let type=action.type;
let Newitem=action.name;
let total=state.total;
let newitemList=state.items;
 newitemList.unshift(Newitem);

if(type==ADD){
    console.log("checkin for type using if condition")
} 


if( type==ADD){

   return {
    ...state,
    items:newitemList,
    total:state.total+1
   }
 
}
else if(type==BUY){
    return {
        ...state,
        items:newitemList,
        buyaction:true
       }
}

else if( type==REM){

   let newtotal=state.total-1;
   let newitems=state.items.filter(item=> item!==action.name);
   return{
     ...state,
     items:newitems,
     total:newtotal
       }
  
    }

    else if(type==REDIRECT_CART){
        console.log("inside redirect")
        return{
         ...state,
         showHideProductDisplay:state.showHideProductDisplay
        }
    }

return state;

}

export default cartReducer;