import {TRANSFORM_TEXT,TRANSFORM_DONE,TRANSFORM_ERROR,TRANSFORM_TEXT_HISTORY } from '../types';


const initialState = {

    textInput: "",
    error: null,
    loading: false
    

}


export default function(state= initialState, action){
        switch(action.type){
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
                        ...state
                    }
             


        default: return state;


                }
    }