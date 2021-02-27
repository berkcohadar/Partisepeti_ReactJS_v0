import React, { Component } from "react";
import { List, Avatar } from "antd";
import { connect } from "react-redux";

export default class Favcollections extends Component {
  data = [
    {
      title: "Favorilerim",
      img: "https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png",
      quantity: 25,
    },
    {
      title: "Yılbaşı",
      img:
        "https://png.pngtree.com/element_our/png/20181102/cute-christmas-tree-element-png_227044.jpg",
      quantity: 8,
    },
    {
      title: "Yılbaşı - Beyaz Tema",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlXzP1AXoO6zmz5CAQp719a7HA4mT35pGjmw&usqp=CAU",
      quantity: 16,
    },
    {
      title: "Sevgililer Günü Hediyeler",
      img:
        "https://png.pngtree.com/png-clipart/20190516/original/pngtree-happy-valentine-day-typography-with-hearts-vector-png-image_3740908.jpg",
      quantity: 4,
    },
  ];
  render() {
    return (
      <div>
        <h1>Koleksiyonlarım</h1>

        <List
          itemLayout="horizontal"
          dataSource={this.data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.img} />}
                title={<a href="https://ant.design">{item.title}</a>}
                description={"Ürün Sayısı: " + item.quantity}
              />
            </List.Item>
          )}
        ></List>
        <a href="">+ Yeni Koleksiyon Oluştur.</a>
      </div>
    );
  }
}
