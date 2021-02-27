import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, CardDeck, Col, Row } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bindActionCreators } from "redux";
import * as productActions from "../../../../../redux/actions/productActions";
import * as cartActions from "../../../../../redux/actions/cartAction";

import { Card, Rate, Typography, Image, notification } from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Hoc from "../../../../root/Hoc";

const { Meta } = Card;
const { Title } = Typography;

class ProductList extends Component {
  responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  addToCart = (placement, product) => {
    this.props.actions.addProductToCart({ quantity: 1, product });
    notification.success({
      message: `${placement} sepete eklendi.`,
      duration: 2.5,
      placement,
    });
  };
  render() {
    return (
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={this.responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        // customLeftArrow= {<LeftOutlined />}
        // customRightArrow= {<RightOutlined />}
        renderArrowsOutside={true}
        arrows={true}
        infinite={true}
      >

        {this.props.products.map((product) =>
          product.variants.map((variant) => (
            <div>
              <Card
                hoverable
                style={{ width: 200 }}
                cover={<Image style={{ width: "190px" }} src={variant.thumbnail} />}
                className="collection"
              >
                <Meta title={variant.__str__} />
                <Row className="prod-row justify-content-md-end">
                  <Col>
                    <Title level={5}>₺{variant.price},00</Title>
                  </Col>
                  <Col>
                    <Row className="justify-content-end">
                      <HeartOutlined className="add-to-cart" />
                      <ShoppingCartOutlined
                        className="add-to-cart"
                        onClick={() => this.addToCart(variant.__str__, variant)}
                      />
                    </Row>
                  </Col>
                </Row>
              </Card>
            </div>
          ))
        )}
      </Carousel>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addProductToCart: bindActionCreators(
        cartActions.addProductToCart,
        dispatch
      ),
      getCart: bindActionCreators(cartActions.getCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);