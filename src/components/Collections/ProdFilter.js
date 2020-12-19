import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Radio, Input } from 'antd';


export default class ProdFilter extends Component {
    state = {
        value: 1,
      };
    
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          };
          const { value } = this.state;
        return (
            <div id="sticky">
                <div className="filter-elem-list">
                    <div className="fltrs-wrppr">
                    <strong level={5}>Fiyat</strong>
                    <Radio.Group onChange={this.onChange} value={value}>
                        <Radio style={radioStyle} value={1}>
                        ₺0 - ₺150
                        </Radio>
                        <Radio style={radioStyle} value={2}>
                        ₺150 - ₺200
                        </Radio>
                        <Radio style={radioStyle} value={3}>
                        ₺200 - ₺300
                        </Radio>
                        <Radio style={radioStyle} value={4}>
                        ₺300+ 
                        </Radio>
                    </Radio.Group>
                    </div>
                    <div className="fltrs-wrppr">
                    <strong level={5}>Ürün Grubu</strong>
                    
                    </div>
                   
                </div>
            </div>
        )
    }
}
