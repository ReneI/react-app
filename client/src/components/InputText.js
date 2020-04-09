
import React,{useState}  from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useToast } from '../components/toast';
import Historical from '../components/Timeline';
import ShowString from '../components/ShowString';

import  {convert} from '../actions/inputAction';

// hook para acceder a la funciones , y useselector al store 








    const InputText =()=> {
      const [text,transform] = useState('');
      const  dispatch = useDispatch();
      const toconvert = (text) => dispatch(convert(text));
      const toast = useToast();
      const showToast = () => toast.add('Please insert lowercase!');
      const stringResults= useSelector(state=> state.input);
      console.log(stringResults.last);
   const handleSubmit= e => {      
         e.preventDefault();

    if(text === text.toUpperCase()){
      showToast();
      return;
    }else{
  

              toconvert(text);
              transform('');
            }
        
            
          };
    

    return (
      <div className="h-100 w-full flex  justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
   
      <div className="mb-4">
      <form
     onSubmit={handleSubmit}  data-testid="form">
      
      <h1 class="text-grey-darkest">Transform</h1>

        <input  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
         type="text"
         aria-label="user-name" 
         placeholder="string"
         name="text"
         value={text}
         data-testid="messageText"
         onChange={e=>transform(e.target.value)}
         placeholder="Test.."

         required={true}
     
        />
     
      <div className="submitButton">
      <button type="submit"  data-testid="sendButton"
 className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
Convert to uppercase</button>

        </div>

        <ShowString
      response={stringResults.last}
      />
  
    
        </form>  </div>
       

      </div> 
  

      <div class="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div class="bg-grey-lighter px-2 py-3 border-solid border-grey-light border-b">
   <h1> Historical</h1>
  </div>
  <table class="text-left w-full border-collapse">
       <thead>
        <tr>
          <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">ID</th>
          <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">String</th>
        </tr>
      </thead>
      <tbody          data-testid="msgInit"
 >
      {  stringResults.textInput.length ===0 ? 'Please insert a value':( stringResults.textInput.map(value=>
      <Historical
      id={value.id}
      stringUpper={value.text}
      />))}


</tbody>
    </table>

  </div>
    </div>
    )
  
}
export default InputText;