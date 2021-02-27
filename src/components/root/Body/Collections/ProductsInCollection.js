import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../../../redux/actions/productActions";
import * as cartActions from "../../../../redux/actions/cartAction";
import * as favActions from "../../../../redux/actions/favAction";
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
import {  Row, Col } from "reactstrap";
import Hoc from "../../../root/Hoc";
import ProdFilter from "./ProdFilter";
import { Container } from "../../../../globalStyles";
import Cart2 from "../../Navbar/Cart2";

const { Meta } = Card;
const { Title } = Typography;

class ProductsInCollection extends Component {
  componentDidMount() {
    this.props.actions.getProducts(this.props.match.params.slug);
  }

  addToCart = (placement, product) => {
    this.props.actions.addProductToCart({ quantity: 1, product });
    notification.success({
      message: `${placement} sepete eklendi.`,
      duration: 2.5,
      placement,
    });
  };
  addToFav = (placement, product) => {
    this.props.actions.addProductToFav({product});
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
                      <Col xs="3" style={{marginBottom:"16px", height: "38%",padding:"0 1%"}}>
                        <Card
                          hoverable
                          cover={<Image src={variant.thumbnail}/>}
                          className="collection"
                        >
                          <Meta title={variant.__str__} />
                          <Row className="prod-row justify-content-md-left">
                              <Title level={5}>₺{variant.price},00</Title>
                          </Row>
                          <Row className="justify-content-end">
                                <HeartOutlined className="add-to-cart" onClick={() => this.addToFav(variant.__str__, variant)}/>
                                <ShoppingCartOutlined
                                  className="add-to-cart"
                                  onClick={() => this.addToCart(variant.__str__, variant)}
                                />
                              </Row>
                        </Card>
                      </Col>
                    ))}
                  </Hoc>
                ))}
              </Row>
            </Container>
            <Container style={{width: "30%"}}>
            <Cart2></Cart2>
</Container>          </Container>
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
    favs: state.favReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addProductToCart: bindActionCreators(cartActions.addProductToCart, dispatch),
      addProductToFav: bindActionCreators(favActions.addProductToFav, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsInCollection);