import React, { useState } from 'react';
import style from "./index.module.css"
import { Layout, Menu, Button, theme } from 'antd';
import { HomeOutlined, FileOutlined, SettingOutlined,  FormOutlined, ApartmentOutlined, BellOutlined, UndoOutlined, UserOutlined } from '@ant-design/icons';
import MyIcon from "../Icons/BuildingOutlined/index"
const { Header, Sider, Content } = Layout;
import Image from 'next/image';
export default function AsideBar() {

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout>
            <Sider
                className={style.sider}
                trigger={null}
                collapsible
                collapsed={collapsed}
                width={57}
                style={{ backgroundColor: '#4FA1C1' }}
            >
                <div className={style.logo} />
                <Menu className='menu' style={{ backgroundColor: '#4FA1C1' , display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:"134px"}} mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="2" icon={ <Image src="/assets/Predio.svg" width={22} height={19} />}style={{ backgroundColor: '#fff' , alignItems: 'center',display:'flex', justifyContent:'center'}} >
                        
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FormOutlined style={{ color: '#4FA1C1'}}width={22} height={19}/>}style={{ backgroundColor: '#fff', alignItems: 'center',display:'flex', justifyContent:'center' }}>
                        
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ApartmentOutlined style={{ color: '#4FA1C1'}}width={22} height={22}/>}style={{ backgroundColor: '#fff',alignItems: 'center',display:'flex', justifyContent:'center' }}>
                        
                    </Menu.Item>
                    <Menu.Item key="3" icon={<BellOutlined style={{ color: '#4FA1C1'}}width={22} height={22}/>}style={{ backgroundColor: '#fff',alignItems: 'center',display:'flex', justifyContent:'center' }}>
                        
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UndoOutlined style={{ color: '#4FA1C1'}}width={22} height={22}/>}style={{ backgroundColor: '#fff',alignItems: 'center',display:'flex', justifyContent:'center' }}>
                        
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UserOutlined  style={{ color: '#4FA1C1'}}width={22} height={22}/>}style={{ backgroundColor: '#fff',alignItems: 'center',display:'flex', justifyContent:'center' }}>
                        
                    </Menu.Item>
                </Menu>
            </Sider>
        </Layout>
    );
};

