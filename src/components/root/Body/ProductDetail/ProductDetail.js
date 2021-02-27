import React, { Component } from "react";
import {
  ProductDetailDiv,
  ProductGallery,
  ProductAllImages,
  ProductCurrentImageDiv,
  ProductCurrentImage,
  ProductImageShadow,
  ProductInfo,
  BuyProduct,
  ProductInfoDiv,
  ProductInfoDetail,
  ProductInfoPrice,
  ProductInfoSpecs,
  ProductInfoDesc,
  ProductInfoDetailName,
  ProductInfoDetailBrand,
  ProductInfoDetailBrandName,
  ProductInfoDetailStar,
  ProductInfoPriceP,
  ProductOtherOptions,
  ProductOtherOptionsShow,
  ProductSellOn,
  ProductButtonArea,
  ProductButtonAreaDiv,
  ProductButtonRow,
  ProductQuantity,
  ProductAddToFav,
  ProductAddtoCart,
  ProductAddtoCartButton,
  ProductInfoPriceArea,
} from "./Product.elements";

import {
  OrderMainButton,
  OrderMainButtonText,
  FormRow,
  FormSelectInput,
} from "../Account/Account.elements";

import { HeartOutlined } from "@ant-design/icons";
import { Rate } from "antd";

export default class ProductDetail extends Component {
  options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5+" },
  ];
  custom = {
    control: (base, state) => ({
      ...base,
      boxShadow: "none",
      height: 40,
      width: 100,
      "&:hover": {
        borderColor: "#ccc !important",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: "#fff !important",
      color: "black",
      "&:hover": {
        backgroundColor: "#e7e4ec !important",
      },
    }),
  };
  handleInput = (e) => {
    let input = "quantity";
    let value = e.label;
    this.setState((prev) => ({ ...prev, [input]: value }));
  };
  render() {
    return (
      <div>
      <h1></h1>

      <ProductDetailDiv>
        <ProductGallery>
          <ProductAllImages>
            <img src="https://www.partisepeti.com/product_images/31717/renk-cumbusu-kek-buketi_s1_202011230310117.jpg"></img>
            <img src="https://www.partisepeti.com/product_images/31717/renk-cumbusu-kek-buketi_s2_20201123031013773.jpg"></img>
            <img src="https://www.partisepeti.com/product_images/31714/renkli-dus-kalp-buketi_s1_20201123030901382.jpg"></img>
            <img src="https://www.partisepeti.com/product_images/31714/renkli-dus-kalp-buketi_s2_20201123030903991.jpg"></img>
          </ProductAllImages>
          <ProductCurrentImage>
            <img src="https://www.partisepeti.com/product_images/31717/renk-cumbusu-kek-buketi_s1_202011230310117.jpg"></img>
          </ProductCurrentImage>
        </ProductGallery>
        <ProductInfoDiv>
          <ProductInfo>
            <ProductInfoDetail>
              <ProductInfoDetailName>
                <b>Partisepeti</b> - Renk Cümbüşü Kek Buketi
              </ProductInfoDetailName>
              <ProductInfoDetailBrand>
                Daha fazla ürün gör -{" "}
                <ProductInfoDetailBrandName>
                  Partisepeti
                </ProductInfoDetailBrandName>
              </ProductInfoDetailBrand>
              <ProductInfoDetailStar>
                <Rate allowHalf defaultValue={2.5} onChange={null} />
                <p>122 Puanlama</p>
                <p> 23 Yorum</p>
              </ProductInfoDetailStar>
            </ProductInfoDetail>
          </ProductInfo>
          <ProductInfoSpecs>
            <h3>Ürün Özellikleri</h3>
            <p>Boyut: 30cm</p>
            <p>Renk: Yeşil</p>
            <p>Gıda Ürünü</p>
            <p style={{ textDecoration: "underline" }}>Aynı Gün Kargo</p>
          </ProductInfoSpecs>
          <ProductInfoDesc>
            <h3>Ürün Açıklaması</h3>
            <p>
              Renkli Dünyam Browni Gül Kek ve Truf Buketi, browni gül keklerden
              ve çeşitli truflardan oluşan enfes lezzetlerin bir arada olduğu
              buketimizin şık sunumu sevdiklerinize tatlı bir sürpriz yapmanıza
              yardımcı olacaktır. Buket içerisinde; yuvarlak strafora
              hazırlanmış 24 adet browni gül kek ve 28 adet hindistan cevizli
              truf, fındıklı truf, yeşilfıstık dekor truf bulunmaktadır. ölçü:
              23 x 15 cm
            </p>
          </ProductInfoDesc>
        </ProductInfoDiv>
        <BuyProduct>
          <ProductOtherOptions>
            <h3>Ürün Varyasyonları</h3>
            <ProductOtherOptionsShow><ProductAllImages style={{display: "flex", }}>
            <img src="https://cdn03.ciceksepeti.com/cicek/gr1556-1/L/ask-fisiltisi-kek-ve-kurabiye-aranjmani-gr1556-1-8d4870c21b43535-5a17fee9.jpg"></img>
            <img src="https://cdn03.ciceksepeti.com/cicek/gr354-1/L/kalbimin-en-tatlisi-kalpli-kek-buketi-gr354-1-8d48af88239db7b-bb5c8aae.jpg"></img>
            <img src="https://cdn03.ciceksepeti.com/cicek/gr1987-1/L/lezzet-stasyonu-kek-ve-tartolet-buketi-standart-boy.jpeg"></img>
            <img src="https://cdn03.ciceksepeti.com/cicek/kc6663171-1/L/canim-canim-browni-gul-kek-ve-truf-buketi--kc6663171-1-f1a6dee590064fe6868b3a3da2956ed8.jpg"></img>
          </ProductAllImages></ProductOtherOptionsShow>
          </ProductOtherOptions>
          <ProductSellOn>Sen de sat!</ProductSellOn>
          <ProductInfoPriceArea>
            <ProductInfoPrice>
              <ProductInfoPriceP
                style={{ textDecoration: "line-through", fontSize: "16px" }}
              >
                ₺ 35,00
              </ProductInfoPriceP>
              <ProductInfoPriceP>₺ 25,00</ProductInfoPriceP>
            </ProductInfoPrice>
          </ProductInfoPriceArea>
          <ProductButtonArea>
            <ProductButtonAreaDiv>
              <ProductButtonRow>
                <FormRow
                  style={{
                    height: "80%",
                    width: "20%",
                    padding: "35px 0",
                    marginLeft: "15%",
                  }}
                >
                  <FormSelectInput
                    type="text"
                    name="quantity"
                    onChange={(e) => this.handleInput(e)}
                    defaultValue={"1"}
                    placeholder="Adet"
                    options={this.options}
                    styles={this.custom}
                    isSearchable={true}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,
                        primary: "#e7e4ec",
                      },
                    })}
                  ></FormSelectInput>
                </FormRow>
                <OrderMainButton
                  style={{
                    width: "40%",
                    height: "40%",
                    marginRight: 10,
                    background: "#FCAA32",
                  }}
                >
                  <OrderMainButtonText>Sepete Ekle</OrderMainButtonText>
                </OrderMainButton>
              </ProductButtonRow>
              <ProductButtonRow>
                <ProductAddToFav>
                  <HeartOutlined
                    style={{ fontSize: "xx-large" }}
                    className="add-to-cart"
                  />
                </ProductAddToFav>
                <OrderMainButton
                  style={{
                    width: "40%",
                    height: "40%",
                    marginRight: 10,
                    background: "#FCAA32",
                  }}
                >
                  <OrderMainButtonText>Hemen Al</OrderMainButtonText>
                </OrderMainButton>
              </ProductButtonRow>
            </ProductButtonAreaDiv>
          </ProductButtonArea>
        </BuyProduct>
      </ProductDetailDiv></div>
    );
  }
}
