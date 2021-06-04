/**
 * file: photo reducer
 * author: Jubi
 * lastModify: Jubi 2021-6-4
 */
import * as actionType from './types';




const photo_reducer = (state = {
    imgLinks:[],
    total:1,
    tags:[]
} ,action)=> {
   
    switch(action.type){
        case actionType.GET_PHOTOS_SUCCEED:
            return action.payload;
            
        default:return state
    }
};
export default photo_reducer;