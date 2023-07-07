import React, {useState, useEffect} from 'react'
import { Button, Menu, Typography, Avatar, Space, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../assets/coin.png';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if(screenSize < 768){
            setActiveMenu(false)
        } else{
            setActiveMenu(true)
        }
    }, [screenSize]);

    const contentStyle = {
        textAlign: 'center',
    };


    return (
        <div className='nav-container'>
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className='logo' style={contentStyle}>
                    <Link to="/" style={{marginBottom: "0px"}}>CoinSight</Link>
                </Typography.Title>
                
                
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined style={{color: "white"}}/>
                </Button>

            </div>
            {activeMenu && (
                <Menu theme='dark' style={{backgroundColor: "rgb(21, 25, 34)"}}>
                    <Menu.Item icon={<HomeOutlined />} key="home">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />} key='cryptocurrencies'>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    {/* <Menu.Item icon={<MoneyCollectOutlined />} key='exchanges'>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item> */}
                    <Menu.Item icon={<BulbOutlined />} key='news'>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            )}
            

        </div>
    )
}

export default Navbar