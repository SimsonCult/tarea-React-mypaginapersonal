import React from 'react';
import { Button} from 'antd';
import {MenuUnfoldOutlined,PoweroffOutlined,MenuFoldOutlined} from '@ant-design/icons';
import Logo from '../../../assets/img/png/logo.png';

import './MenuTop.scss'

export default function MenuTop(props){
    const {menuCollapsed ,setMenuCollapsed} = props;

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__left-logo" 
                    src={Logo}
                    alt="Mauricio Maldonado"
                />
                <Button type="link" onClick={()=> setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={()=> console.log("desconeccion")}> 
                <PoweroffOutlined />
                </Button>
            </div>
        </div>
    )
}