import React from 'react';
import {Row,Col} from 'reactstrap';
import {DesktopNavLogoArea} from './Navbar.elements'
import {Input,Menu} from 'antd';
import {UserOutlined,HeartFilled,ShoppingCartOutlined  } from '@ant-design/icons';
import MainCampaign from './MainCampaign';

const DesktopNavLogo = () => {
    return (
       <>
       <DesktopNavLogoArea>
                <Row className="justify-content-center">
                    <Col md="4">
                        <a href="/">
                        <img
                            width={260}
                            src="https://www.partisepeti.com/static/assets/img/logo.png"
                            alt="partisepeti"
                        />
                        </a>
                    </Col>
                    <Col className="searchContainer" md="4">
                        <Input
                        placeholder="Ürün ara"
                        className="onSearch"
                        // onPressEnter={onSearch}
                        bordered={false}
                        />
                    </Col>

                    <Col className="iconsContainer" md="4">
                        <Row className="justify-content-md-center">
                            <Menu
                                // onClick={this.handleClick}
                                // selectedKeys={[current]}
                                mode="horizontal"
                            >
                                <Menu.Item
                                className="header-icon"
                                key="user"
                                icon={<UserOutlined />}
                                ></Menu.Item>

                                <Menu.Item
                                className="header-icon"
                                key="heart"
                                icon={<HeartFilled />}
                                ></Menu.Item>
                                {/* <Badge dot count={5}> */}
                                <Menu.Item
                                className="header-icon"
                                key="shop"
                                icon={<ShoppingCartOutlined />}
                                // onClick={() => this.showDrawer()}
                                />
                            </Menu>
                        </Row>
                    </Col>
                </Row>
            </DesktopNavLogoArea>
       </>
    )
}

export default DesktopNavLogo;
