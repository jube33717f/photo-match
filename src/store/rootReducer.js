import { combineReducers } from 'redux';
import photo_reducer from './PhotoModule/reducer'

const rootReducer = combineReducers({
    photo_reducer:photo_reducer,
});

export default rootReducer;