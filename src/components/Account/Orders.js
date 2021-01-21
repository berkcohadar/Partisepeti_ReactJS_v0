import React, { Component } from "react";
import { PageHeader, Button, Descriptions } from "antd";
import { SendOutlined, CheckOutlined } from "@ant-design/icons";
export default class Orders extends Component {
  render() {
    return (
      <div>
        <h3>Siparişlerim</h3>
        <PageHeader
          className="site-page-header"
          backIcon={<SendOutlined />}
          onBack={() => console.log()}
          title="Kargoya Verildi"
          subTitle=""
          extra={[
            <Button key="3">Kargo Takip</Button>,
            <Button key="2" type="danger">
              Sorun Bildir
            </Button>,
            <Button key="1" type="primary">
              Sipariş Detayı
            </Button>,
          ]}
        >
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Alıcı">Aleyna Ceylan</Descriptions.Item>
            <Descriptions.Item label="Sipariş Numarası">
              <a>421421</a>
            </Descriptions.Item>
            <Descriptions.Item label="Sipariş Tarihi">
              01.13.2021
            </Descriptions.Item>
            <Descriptions.Item label="Durum">
              Kargoya Verildi.
            </Descriptions.Item>
            <Descriptions.Item label="Tutar" style={{ textAlign: "right" }}>
              ₺550.35
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <br />
        <PageHeader
          className="site-page-header"
          backIcon={<CheckOutlined />}
          onBack={() => console.log()}
          title="Teslim Edildi"
          subTitle=""
          extra={[
            <Button key="3">Kargo Takip</Button>,
            <Button key="2" type="danger">
              Sorun Bildir
            </Button>,
            <Button key="1" type="primary">
              Sipariş Detayı
            </Button>,
          ]}
        >
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Alıcı">Aleyna Ceylan</Descriptions.Item>
            <Descriptions.Item label="Sipariş Numarası">
              <a>413246</a>
            </Descriptions.Item>
            <Descriptions.Item label="Sipariş Tarihi">
              17.08.2020
            </Descriptions.Item>
            <Descriptions.Item label="Durum">Teslim Edildi.</Descriptions.Item>
            <Descriptions.Item label="Tutar" style={{ textAlign: "right" }}>
              ₺126.75
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
    );
  }
}
