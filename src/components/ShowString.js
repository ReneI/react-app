
import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import  {getText} from '../actions/inputAction';

const ShowString  = (re) => {
    console.log(re);
const {response}= re
    const dispatch = useDispatch();
    useEffect(()=>{
    const response = dispatch(getText())
   
    },[])


    return ( 

  <div  class="p-3">
 <span data-testid="result" data-testid="resultText"
>
 Result: {response}
       </span>
    
    </div>
    
     );
}
 
export default ShowString ;