/**
 * file: photo saga
 * author: Jubi
 * lastModify: Jubi 2021-6-4
 */
import { call, put, takeLatest, fork} from 'redux-saga/effects';
import * as actionType from './types';
import * as actions from './action';
import { searchPhoto } from '../../apis'



const searchPhotoRequest = async (keyword,page)=>{
    const req = await searchPhoto(keyword,page)
    if(req.status === 200){
        console.log(req.data)
        const arr =[]
         const imgLinks = req.data.results.map(e=>{
                e.tags.map(x=>{
                    if(!arr.includes(x.title)){
                        arr.push(x.title)
                    }
                })
                 return {
                    full:e.urls.full,
                    thumb:e.urls.thumb

                }
        })
        return {
            status:true,
            photos:imgLinks,
            page:req.data.total_pages,
            tags:arr,
            keyword:keyword
        }
        
    }

    return{
        status:false
    }
}

export function* get_photos (action){
    
    const info = action.payload
    
    const req = yield call(searchPhotoRequest, info.keyword, info.page)

    
    
    if(req.status){

        yield put(actions.getSucceed(req.photos,req.page,req.tags,req.keyword))
        
        
    }else{
        yield put(actions.getFailed())
    }
    



}
export function* watchIncrementAsync() {

    yield takeLatest(actionType.SEARCH_PHOTOS_REQUEST, get_photos );
}

const photo_sagas = [fork(watchIncrementAsync)];
export default photo_sagas;