import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

import { Image,Input,Button } from 'antd';
import { Menu } from 'antd';
import {  UserOutlined,HeartFilled, ShoppingCartOutlined } from '@ant-design/icons';


const { Search } = Input;
const onSearch = value => console.log(value);

export default class LogoArea extends Component {
    state = {
        current: null,
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
    render() {
        const { current } = this.state;
        return (
           <Container className="themed-container header" fluid={true}>
               <Row>
                    <Col md="3">
                    <img
                        width={250}
                        src="https://www.partisepeti.com/static/assets/img/logo.png"
                        alt="partisepeti"
                        />
                    </Col>
                    <Col className="searchContainer" md="6">
                    <Input placeholder="Ürün ara" className="onSearch" onPressEnter={onSearch}  bordered={false} style={{ width: 430 }} />
                    </Col>
                    
                    <Col md="3">
                    <Row className="justify-content-md-center">
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
                    <Menu.Item key="user" icon={<UserOutlined />}></Menu.Item>


                    <Menu.Item key="heart" icon={<HeartFilled />}></Menu.Item>

                    <Menu.Item key="shop" icon={<ShoppingCartOutlined />}></Menu.Item>

                    </Menu>
                    </Row>
                    </Col>
                </Row>
           </Container>
        )
    }
}
