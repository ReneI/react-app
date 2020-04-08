
import React from 'react';
import {useDispatch,useSelector} from 'react-redux';

const Historical  = (data) => {
const {id,stringUpper }= data;
    const dispatch = useDispatch();
    //getState 
 
    const stringResults = 'hola';
    const stringResults2= useSelector(state=> state.input);
    console.log(stringResults2);
    return ( 

        <tr class="hover:bg-grey-lighter">
        <td class="py-4 px-6 border-b border-grey-light">{id}</td>
        <td class="py-4 px-6 border-b border-grey-light">{stringUpper}</td>
</tr>

               
     );
}
 
export default Historical ;