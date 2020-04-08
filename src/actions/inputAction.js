import {SAVE_TRANSFORM_TEXT,GET_TRANSFORM_TEXT, TRANSFORM_TEXT,TRANSFORM_DONE,TRANSFORM_ERROR,TRANSFORM_TEXT_HISTORY } from '../types';
import clientAxios from '../config/axios';
import PropTypes from 'prop-types';
import { useToast } from '../components/toast';
import Swal from 'sweetalert2';
import React,{useState}  from 'react';

// convert to uppercase
let nextId=0; 

  export  function  convert(text) {
        



        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
        return async (dispatch)=>{ 
   
        dispatch(transform());

            try {
                //get text
              const response = await  clientAxios.get('/convert?text=' +text);
               let getText= response.data.transformed;
               dispatch(saveTransformed(getText));

               dispatch(success(getText));

                Toast.fire({
                    icon:  'success',
                    title: 'Signed in successfully'
                  })
            } catch (err) {
                Toast.fire({
                    icon: 'error',
                    title: err
                  })
            dispatch(error(true));
      
            }



    }
}





const transform=()=>({
type: TRANSFORM_TEXT

});
// historial
const error= state=>({
    type:TRANSFORM_ERROR,
    payload:state
  })

const success=text=>({
    type:  TRANSFORM_DONE,
    payload:{ text:text,id:nextId++}
})




const saveTransformed=last =>({
    type:SAVE_TRANSFORM_TEXT,
    payload: last
  })

  export function getText(){
    return async(dispatch) =>{
      dispatch(getText )
  }
}
export function getHistorical(){
  return async(dispatch) => {
    dispatch(getAll())
}
}


const getAll= ()=>({
    type:GET_TRANSFORM_TEXT,
 
  })

const getTexts= ()=>({

    type:  TRANSFORM_TEXT_HISTORY,
    payload: true
})