import {TRANSFORM_TEXT,TRANSFORM_DONE,TRANSFORM_ERROR } from '../types';


// convert to uppercase

export function convert(text){

    return (dispatch)=>{
        dispatch(transform());

            try {
                dispatch(success(text));


            } catch (error) {
                dispatch(error());

            }



    }
}

const transform=()=>({
type: TRANSFORM_TEXT

});

const success=text=>({

    type:  TRANSFORM_DONE,
    payload: text
})


// historial
const error=()=>({

})