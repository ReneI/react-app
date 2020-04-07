
import React,{useState}  from 'react';
import {useDispatch,useSelector} from 'react-redux';

import  {convert} from '../actions/inputAction';

// hook para acceder a la funciones , y useselector al store 








    const InputText =()=> {
      const [text,transform] = useState('');
      const  dispatch = useDispatch();
      const toconvert = (text) => dispatch(convert(text));

   const handleSubmit= e => {
         e.preventDefault();

    if(text.trim()=== '' && text === text.toUpperCase()){

      return;
    }else{
      console.log('paased');


              toconvert(text);
            }
        
            
          };
    

    return (
      <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
   
      <div class="mb-4">
      <form
     onSubmit={handleSubmit}>
      
      <h1 className="text-grey-darkest">Transform</h1>

        <input  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
         type="text"
         name="text"
         value={text}
         onChange={e=>transform(e.target.value)}
         placeholder="Test.."

         required={true}
     
        />
     
      <div className="submitButton">
        <button type="submit">Convert to uppercase</button>

        </div>
        </form>  </div>
       

      </div> 
  
    </div>
    )
  
}
export default InputText