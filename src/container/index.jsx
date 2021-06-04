/**
 * file: Container
 * author: Jubi
 * lastModify: Jubi 2021-6-4
 */

import React,{useState} from 'react'
import { Layout, Menu  } from 'antd';
import './style.scss'
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import  { searchRequest  } from '../store/PhotoModule/action'
const { Header, Content, Footer } = Layout;


const Container = (props)=>{
    const [value,setValue] = useState('')
    const dispatch = useDispatch();
    const path = useHistory()

    const onSearch = () => {
        dispatch(searchRequest(value,1))
        // dispatch({
        //     type: 'SEARCH_PHOTOS_REQUEST',
        //     payload:{
        //         keyword:value,
        //         page:1
        //     }
        // })
    };

    

    
    return  <Layout className='Container'>
            <Header  className='Container__header'>
                <h3>Navbar</h3>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={path.location.pathname==='/about'?['2']:['1']}>
                        <Menu.Item key="1">
                            <Link to='/'>Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/about'>
                                About me
                            </Link>
                        </Menu.Item>    
                         
                </Menu>  
                <div className='Container__header-search'>
                    <input value={value} onChange={(e)=>setValue(e.target.value)}></input>
                    <button onClick={onSearch}>Search</button>
                </div>
                      
            </Header>
            <Content className='Container__content'>
                {props.children}
            </Content>
            <Footer className='Container__footer'>
                @phono-match
            </Footer>
        </Layout>
   
}

export default Container;