/**
 * file: Homepage
 * author: Jubi
 * lastModify: Jubi 2021-6-4
 */
import React,{ useEffect,useState } from 'react'
import './style.scss';
import Container from '../../container'
import { getCollection } from  '../../apis/index'
import { useSelector, useDispatch } from 'react-redux';
import  { getSucceed, getFailed, searchRequest  } from '../../store/PhotoModule/action'
import { Tag, Divider,Pagination } from 'antd';
const HomePage = ()=>{
    const dispatch = useDispatch();
    const photos  = useSelector(state => state.photo_reducer)
    const photos_link = photos.imgLinks
    const photos_tag = photos.tags
    const photos_page = photos.totalPage?photos.totalPage:1

    const [currentPage,setCurrentPage]=useState(1)
    
    const fetchCollection = async ()=>{
        try{
            const req = await getCollection()
            let arr = []
            if(req.status === 200){
                console.log(req.data)
                const imgLinks = req.data.map(e=>{
                        
                        return {
                            full:e.urls.full,
                            thumb:e.urls.thumb
                        }
                })
                dispatch(getSucceed(imgLinks,1,arr))
            }
        }catch(err){
            dispatch(getFailed())
        }
    }
    useEffect(()=>{
        fetchCollection()
        
        
    },[])
   
    return <>
    <Container>
        {photos_tag.length>1?<section className='tagsContainer'>
        <Divider orientation="left">Tags</Divider>
            {photos_tag.map(e=><Tag color="#2db7f5"
                                className='tagsContainer_tag'
                                onClick={()=>{
                                    dispatch(searchRequest(e,1))
                                }}
                                >
                {e}
                </Tag>)}
        </section>:null}
        <div className='imgContainer'>
            {photos_link?photos_link.map(e=><div className='imgContainer__box'>
                <a href={e.full} target='__blank'><img src={e.thumb}/></a>
            </div>):null}
        </div>
        <section className='paginationContainer'>
            <Pagination defaultCurrent={1} current={currentPage} showQuickJumper total={photos_page*10} onChange={(page,size)=>{
                setCurrentPage(page)
                dispatch(searchRequest(photos.keyword,page))
            }} />
        </section>
    </Container>

    </>
}

export default HomePage;