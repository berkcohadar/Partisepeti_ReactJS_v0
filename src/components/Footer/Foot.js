import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import { Footer } from 'antd/lib/layout/layout';
import { List, Typography } from 'antd';

export default class Foot extends Component {
    state = {
        data : [
            'HAKKIMIZDA',
            'YARDIM',
            'İLETİŞİM',
            'ÜRÜN İADE',
        ],
        menu : [
            {tabId:1,title:'Yılbaşı',id:'1',slug:'yilbasi',url:'#'},
            {tabId:2,title:'Yeniyıl',id:'1',slug:'erkek',url:'#'},
            {tabId:3,title:'Kız',id:'1',slug:'kiz',url:'#',submenus:null},
            {tabId:4,title:'Parti',id:'1',slug:'parti',url:'#',submenus:null},
            {tabId:5,title:'Yetişkin',id:'1',slug:'yetiskin',url:'#',submenus:null},
            {tabId:6,title:'Kek & Kurabiye',id:'1',slug:'kek-kurabiye',url:'#',submenus:null},
          ]
    }
    render() {
        return (
            <Footer className="footer">
                <Container className="footer__wrapper">
                    
                    <List className="footer_list"
                        header="PARTİSEPETİ"
                        dataSource={this.state.data}
                        renderItem={item => (
                            <a>
                                <List.Item className="footer_item_text">
                            {item}
                            </List.Item>
                            </a>                        
                    
                        )}
                        />
                    <List className="footer_list"
                        header="KATEGORİLER"
                        dataSource={this.state.menu}
                        renderItem={item => (
                            
                                <List.Item className="footer_item_text">
                            <a>
                            {item.title}</a>
                            </List.Item>
                            
                    
                        )}
                        />
                        <List className="footer_list"
                        header="KATEGORİLER"
                        dataSource={this.state.menu}
                        renderItem={item => (
                            
                                <List.Item className="footer_item_text">
                            <a>
                            {item.title}</a>
                            </List.Item>
                            
                    
                        )}
                        />
                    </Container>
                
            </Footer>
        )
    }
}
