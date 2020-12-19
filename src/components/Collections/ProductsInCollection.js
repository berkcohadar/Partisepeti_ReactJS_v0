import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartAction";

import {
  Card,
  Typography,
  Button,
  notification,
  Space,
  Image,
  Rate,
  Avatar,
} from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { Container, Row, Col } from "reactstrap";
import Hoc from "../root/Hoc";
import ProdFilter from "./ProdFilter";

const { Meta } = Card;
const { Title } = Typography;

class ProductsInCollection extends Component {
  componentDidMount() {
    this.props.actions.getProducts(this.props.match.params.slug);
  }

  addToCart = (placement, product) => {
    this.props.actions.addProductToCart({ quantity: 1, product });
    notification.success({
      message: `Ürününüz sepete başarıyla eklendi. ${placement}`,
      duration: 2.5,
      placement,
    });
  };

  render() {
    return (
      <Container className="product-app">
        <Container className="product-app-container">
          <Container className="prod-rslt">
            <Container className="filter-cont">
              <ProdFilter></ProdFilter>
            </Container>

            <Container className="prod-table">
              <Row>
                {this.props.products.map((product) => (
                  <Hoc>
                    {product.variants.map((variant) => (
                      <Col xs="3">
                        <Card
                          hoverable
                          style={{ width: 200 }}
                          cover={<Image width={200} src={variant.thumbnail} />}
                          className="collection"
                        >
                          <Meta title={variant.__str__} />

                          <Rate
                            className="prod-star"
                            disabled
                            defaultValue={3}
                          />

                          <Row className="prod-row justify-content-md-end">
                            <Col>
                              <Title level={5}>₺{variant.price},00</Title>
                            </Col>
                            <Col>
                              <Row className="justify-content-end">
                                <HeartOutlined className="add-to-cart" />
                                <ShoppingCartOutlined
                                  className="add-to-cart"
                                  onClick={() => this.addToCart("", variant)}
                                />
                              </Row>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    ))}
                  </Hoc>
                ))}
              </Row>
            </Container>
          </Container>
        </Container>
      </Container>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsInCollection);
