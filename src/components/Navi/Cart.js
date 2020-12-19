import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table } from "antd";
import {
  MinusCircleOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import * as cartActions from "../../redux/actions/cartAction";

class Cart extends Component {
    columns = [
        { title: 'Ürün', dataIndex: 'name', key: 'name' },
        {
          title: '',
          dataIndex: 'removeProduct',
          key: 'remove1Product',
          render: (product) => <MinusCircleOutlined onClick={()=>this.props.actions.remove1FromCart({product})}/>,
        },
        { title: 'Adet', dataIndex: 'quantity', key: 'quantity' },
        {
          title: '',
          dataIndex: 'removeProduct',
          key: 'remove1Product',
          render: (product) => <PlusCircleOutlined onClick={()=>this.addToCart({product})}/>,
        },
        { title: 'Fiyat', dataIndex: 'price', key: 'price' },
        { title: 'Toplam', dataIndex: 'productTotal', key: 'productTotal'}, 
        {
          title: '',
          dataIndex: 'removeProduct',
          key: 'removeAllProducts',
          render: (product) => <DeleteOutlined onClick={()=>this.props.actions.removeAllFromCart(product)}/>,
        },
      ];
      totalPrice = () =>{
        const data = this.data();
        let totalPrice = 0;
        data.map(product=>(
          totalPrice += product.productTotal
        ));
        return totalPrice;
      };
      data = () => {
        const data = [];
        let item;
        this.props.cart.map(cartItem=>(
          item = {
            key:cartItem.product.id,
            name:cartItem.product.__str__,
            quantity:cartItem.quantity,
            price:cartItem.product.price,
            productTotal:cartItem.product.price*cartItem.quantity,
            removeProduct:cartItem.product
          },
          data.push(item)
        ));
        return data;
      }
      addToCart = (product) => {
        // placement,
        this.props.actions.addProductToCart(product);
        // notification.success({
        //   message: `Ürününüz sepete başarıyla eklendi. ${placement}`,
        //   duration:2.5,
        //   placement,
        // });
      };
    render() {
        return (
            <Table
                  columns={this.columns}
                  dataSource={this.data()}
                  bordered
                  
                  footer={() => 'Toplam Fiyat:\t'+this.totalPrice()}
                />
        )
    }
}


function mapStateToProps(state) {
    return {
      cart : state.cartReducer,
      
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        getCart    : bindActionCreators(cartActions.getCart, dispatch),
        addProductToCart  : bindActionCreators(cartActions.addProductToCart, dispatch),
        remove1FromCart : bindActionCreators(cartActions.remove1ProductFromCart,dispatch),
        removeAllFromCart : bindActionCreators(cartActions.removeAllFromCart,dispatch)
  
      },
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart);