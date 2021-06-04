/**
 * file: photo action
 * author: Jubi
 * lastModify: Jubi 2021-6-4
 */
import * as actionType from './types';



export const searchRequest = (keyword,page)=>({
    type: actionType.SEARCH_PHOTOS_REQUEST,
    payload:{
        keyword:keyword,
        page:page
    }
})

export const getSucceed = (imgLinks,totalPage,tags,keyword='')=>({
    type:actionType.GET_PHOTOS_SUCCEED,
    payload:{
        imgLinks:imgLinks,
        totalPage:totalPage,
        tags:tags,
        keyword:keyword
    }
})

export const getFailed = ()=>({
    type:actionType.GET_PHOTOS_FAILED,
    payload:[]
})






