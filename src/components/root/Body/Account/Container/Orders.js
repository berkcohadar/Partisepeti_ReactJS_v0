import React, { useState } from "react";
import { connect } from "react-redux";

import { PageHeader, Button, Descriptions } from "antd";
import { SendOutlined, CheckOutlined } from "@ant-design/icons";

import {
  AccountDiv,
  OrderItem,
  OrderMain,
  OrderMainStatus,
  OrderMainStatusDelivery,
  OrderMainStatusSuccess,
  OrderMainStatusText,
  OrderMainButtonArea,
  OrderMainButton,
  OrderMainButtonText,
  OrderInfo,
  OrderInfoRow,
  OrderInfoRowDetail,
  OrderInfoRowDetailText,
  OrderItemArea,
} from "../Account.elements";



const Orders = () => {
  const [comp,setComponent] = useState("")
  const [height,setHeight] = useState("20vh")
  const deliveryComponent = <p>Kargo Takip</p>;
  const orderComponent = <p>Sipariş Detayı</p>;
    return (
        <AccountDiv>
        <h1>Siparişlerim</h1>
          <OrderItem style={{height:height}} onClick={()=>{setHeight("75vh");setComponent(orderComponent);}} onMouseLeave ={()=>{setHeight("20vh");setComponent("");} } onKeyPress={(key)=>setHeight("20vh")}>
          <OrderItemArea>
            <OrderMain>
              <OrderMainStatus>
                <OrderMainStatusDelivery/>
                <OrderMainStatusText>Kargoya Verildi</OrderMainStatusText>
              </OrderMainStatus>
              <OrderMainButtonArea>
              <OrderMainButton onClick={()=>setComponent(deliveryComponent)} style={{background:"#FCAA32"}}>
                  <OrderMainButtonText >Kargo Takip</OrderMainButtonText>
                </OrderMainButton>
                <OrderMainButton style={{background:"#e7e4ec"}}>
                  <OrderMainButtonText style={{color:"#111"}}>Sorun Bildir</OrderMainButtonText>
                </OrderMainButton>
                <OrderMainButton onClick={()=>setComponent(orderComponent)} style={{background:"#2c343c"}}>
                  <OrderMainButtonText>Sipariş Detayı</OrderMainButtonText>
                </OrderMainButton>
              </OrderMainButtonArea>
            </OrderMain>
            <OrderInfo>
              <OrderInfoRow>
                <OrderInfoRowDetail>
                  <OrderInfoRowDetailText>Sipariş Numarası: 421421</OrderInfoRowDetailText>
                </OrderInfoRowDetail>
                <OrderInfoRowDetail>
                  <OrderInfoRowDetailText>Alıcı:  Aleyna Ceylan</OrderInfoRowDetailText>
                </OrderInfoRowDetail>
                <OrderInfoRowDetail>
                  <OrderInfoRowDetailText>Sipariş Tarihi: 01.13.2021</OrderInfoRowDetailText>
                </OrderInfoRowDetail>
              </OrderInfoRow>
              <OrderInfoRow>
                <OrderInfoRowDetail>
                  <OrderInfoRowDetailText>Durum:  Kargoya Verildi.</OrderInfoRowDetailText>
                </OrderInfoRowDetail>
                <OrderInfoRowDetail>
                  <OrderInfoRowDetailText>Sipariş Tutarı: ₺ 126.75</OrderInfoRowDetailText>
                </OrderInfoRowDetail>
              </OrderInfoRow>
            </OrderInfo>
            </OrderItemArea>
            {comp}
          </OrderItem>
          <OrderItem>
            <OrderMain>
              <OrderMainStatus>
                <OrderMainStatusDelivery/>
                <OrderMainStatusText>Kargoya Verildi</OrderMainStatusText>
              </OrderMainStatus>
              <OrderMainButtonArea>
              <OrderMainButton style={{background:"#FCAA32"}}>
                  <OrderMainButtonText >Kargo Takip</OrderMainButtonText>
                </OrderMainButton>
                <OrderMainButton style={{background:"#e7e4ec"}}>
                  <OrderMainButtonText style={{color:"#111"}}>Sorun Bildir</OrderMainButtonText>
                </OrderMainButton>
                <OrderMainButton  style={{background:"#2c343c"}}>
                  <OrderMainButtonText>Sipariş Detayı</OrderMainButtonText>
                </OrderMainButton>
              </OrderMainButtonArea>
            </OrderMain>
            <OrderInfo>
              <OrderInfoRow>
                <OrderInfoRowDetail>
                  <OrderInfoRowDetailText>Sipariş Numarası: 421421</OrderInfoRowDetailText>
                </OrderInfoRowDetail>
                <OrderInfoRowDetail>
                  <OrderInfoRowDetailText>Alıcı:  Aleyna Ceylan</OrderInfoRowDetailText>
                </OrderInfoRowDetail>
                <OrderInfoRowDetail>
                  <OrderInfoRowDetailText>Sipariş Tarihi: 01.13.2021</OrderInfoRowDetailText>
                </OrderInfoRowDetail>
              </OrderInfoRow>
              <OrderInfoRow>
                <OrderInfoRowDetail>
                  <OrderInfoRowDetailText>Durum:  Kargoya Verildi.</OrderInfoRowDetailText>
                </OrderInfoRowDetail>
                <OrderInfoRowDetail>
                  <OrderInfoRowDetailText>Sipariş Tutarı: ₺ 126.75</OrderInfoRowDetailText>
                </OrderInfoRowDetail>
              </OrderInfoRow>
            </OrderInfo>
          </OrderItem>
        </AccountDiv>
    );
}

export default Orders;
