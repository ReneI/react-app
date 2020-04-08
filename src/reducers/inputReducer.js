import { SAVE_TRANSFORM_TEXT,GET_TRANSFORM_TEXT, TRANSFORM_TEXT,TRANSFORM_DONE,TRANSFORM_ERROR,TRANSFORM_TEXT_HISTORY } from '../types';


const initialState = {

    textInput:[],
    error: null,
    loading: false,
    last:null
    

}


export default function(state= initialState, action){
        switch(action.type){
            case TRANSFORM_TEXT_HISTORY:
            case  TRANSFORM_TEXT:
                return{

                    ...state,
                    loading: true
                }
            case TRANSFORM_DONE:
                return{

                    ...state,
                    loading: false,
                    textInput:[...state.textInput,action.payload]

                }
            

                case TRANSFORM_ERROR:
                    return{
                        ...state,
                        loading: false,
                        error: action.payload
                    }
            case GET_TRANSFORM_TEXT:
                return{
                    loading:false,
                    textInput:action.payload
                }
              case  SAVE_TRANSFORM_TEXT:
              return{ ...state,
                    loading:false,
                    last:action.payload
                }
                default: return state;

              }

             




                }
            