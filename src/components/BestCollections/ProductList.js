import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  CardGroup,
  Col,
  Row,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";

import { Carousel } from "antd";

class ProductList extends Component {
  componentDidMount() {
    // this.props.actions.getProducts()
  }
  contentStyle = {
    margin:"20px",
    height: "%100",
    color: "#fff",
    lineHeight: "10px",
    textAlign: "center",
    background: "#fff",
  };
  carouselStyle = {
    height: "520px",
    background : "black",
    color: "#fff",
    lineHeight: "10px",
    textAlign: "center",
    // background: "#fff",
  };
  p = {
    display: "none",
  };
  state = {
    counter: 0,
  };
  increment = () => (this.counter += 1);
  render() {
    return (
      <Container>
        <Carousel style={this.carouselStyle} autoplay>
          {this.props.products.map((product, index) => (
            <div>
              <p style={this.p}> {(this.state.counter = index)} </p>
              <p style={this.p}>
                {" "}
                {this.state.counter === 0
                  ? null
                  : (this.state.counter += 2)}{" "}
              </p>
              <CardDeck>
                <Row>
                  {this.props.products[this.state.counter] ? (
                    <Col xs="4">
                      <Card
                        key={this.props.products[this.state.counter].id}
                        style={this.contentStyle}
                      >
                        <CardImg
                          top
                          width="%100"
                          src={
                            this.props.products[this.state.counter].thumbnail
                          }
                          alt="Card image cap"
                        />
                        <CardBody>
                          <CardTitle tag="h5">
                            {this.props.products[this.state.counter].name}
                          </CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">
                            ₺
                            {
                              this.props.products[this.state.counter]
                                .variants[0].price
                            }
                            .00
                          </CardSubtitle>
                          <CardText>{/* {product.description} */}</CardText>
                          <Button color="success">Sepete Ekle</Button>
                        </CardBody>
                      </Card>
                    </Col>
                  ) : null}
                  <p style={this.p}> {(this.state.counter += 1)} </p>
                  {this.props.products[this.state.counter] ? (
                    <Col xs="4">
                      <Card
                        key={this.props.products[this.state.counter].id}
                        style={this.contentStyle}
                      >
                        <CardImg
                          top
                          width="100%"
                          src={
                            this.props.products[this.state.counter].thumbnail
                          }
                          alt="Card image cap"
                        />
                        <CardBody>
                          <CardTitle tag="h5">
                            {this.props.products[this.state.counter].name}
                          </CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">
                            ₺
                            {
                              this.props.products[this.state.counter]
                                .variants[0].price
                            }
                            .00
                          </CardSubtitle>
                          <CardText>{/* {product.description} */}</CardText>
                          <Button color="success">Sepete Ekle</Button>
                        </CardBody>
                      </Card>
                    </Col>
                  ) : null}
                  <p style={this.p}> {(this.state.counter += 1)} </p>
                  {this.props.products[this.state.counter] ? (
                    <Col xs="4">
                      <Card
                        key={this.props.products[this.state.counter].id}
                        style={this.contentStyle}
                      >
                        <CardImg
                          top
                          width="100%"
                          src={
                            this.props.products[this.state.counter].thumbnail
                          }
                          alt="Card image cap"
                        />
                        <CardBody>
                          <CardTitle tag="h5">
                            {this.props.products[this.state.counter].name}
                          </CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">
                            ₺
                            {
                              this.props.products[this.state.counter]
                                .variants[0].price
                            }
                            .00
                          </CardSubtitle>
                          <CardText>{/* {product.description} */}</CardText>
                          <Button color="success">Sepete Ekle</Button>
                        </CardBody>
                      </Card>
                    </Col>
                  ) : null}
                </Row>
              </CardDeck>
            </div>
          ))}
        </Carousel>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
