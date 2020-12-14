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
import "react-multi-carousel/lib/styles.css";

class ProductList extends Component {
  componentDidMount() {
    // this.props.actions.getProducts()
  }
  contentStyle = {
    height: "370px",
    color: "#fff",
    lineHeight: "10px",
    textAlign: "center",
    background: "#fff",
  };
  p = {
    display: "none",
  };
  state ={
    counter:0
  };
  increment = () => (
    this.counter +=1
  );
  render() {
    return (
      <Container>
        <Carousel autoplay>
          {this.props.products.map((product,index) => (
            <div>
            <p style={this.p}> {this.state.counter=index} </p>
            <p style={this.p}> {this.state.counter===0 ? null : this.state.counter+=2} </p>
              <CardDeck>
                <Row>
                {this.props.products[this.state.counter] ? 
                  <Col xs="4">
                    <Card key={this.props.products[this.state.counter].id} style={this.contentStyle}>
                      <CardImg
                        top
                        width="100%"
                        src={this.props.products[this.state.counter].thumbnail}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle tag="h5">{this.props.products[this.state.counter].name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          ₺{this.props.products[this.state.counter].variants[0].price}.00
                        </CardSubtitle>
                        <CardText>{/* {product.description} */}</CardText>
                        <Button color="success">Sepete Ekle</Button>
                      </CardBody>
                    </Card>
                  </Col>: null}
                  <p style={this.p}> {this.state.counter+=1} </p>
                  {this.props.products[this.state.counter] ? 
                  <Col xs="4">
                    <Card key={this.props.products[this.state.counter].id} style={this.contentStyle}>
                      <CardImg
                        top
                        width="100%"
                        src={this.props.products[this.state.counter].thumbnail}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle tag="h5">{this.props.products[this.state.counter].name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          ₺{this.props.products[this.state.counter].variants[0].price}.00
                        </CardSubtitle>
                        <CardText>{/* {product.description} */}</CardText>
                        <Button color="success">Sepete Ekle</Button>
                      </CardBody>
                    </Card>
                  </Col>
                  : null}
                  <p style={this.p}> {this.state.counter+=1} </p>
                  {this.props.products[this.state.counter] ? 
                  <Col xs="4">
                    <Card key={this.props.products[this.state.counter].id} style={this.contentStyle}>
                      <CardImg
                        top
                        width="100%"
                        src={this.props.products[this.state.counter].thumbnail}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle tag="h5">{this.props.products[this.state.counter].name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          ₺{this.props.products[this.state.counter].variants[0].price}.00
                        </CardSubtitle>
                        <CardText>{/* {product.description} */}</CardText>
                        <Button color="success">Sepete Ekle</Button>
                      </CardBody>
                    </Card>
                  </Col>
                  : null}
                  
                </Row>
              </CardDeck>
              
            </div>
          ))}
          {/* <div>
            <h3 style={this.contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={this.contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={this.contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={this.contentStyle}>4</h3>
          </div> */}
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

// responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };
// <Carousel
//           swipeable={true}
//           draggable={true}
//           showDots={true}
//           responsive={this.responsive}
//           ssr={true} // means to render carousel on server-side.
//           infinite={true}
//           autoPlay={this.props.deviceType !== "mobile" ? true : false}
//           autoPlaySpeed={2000}
//           keyBoardControl={true}
//           customTransition="all .5"
//           transitionDuration={99999999999999999999999999999}
//           containerClass="carousel-container"
//           removeArrowOnDeviceType={["tablet", "mobile"]}
//           deviceType="desktop"
//           dotListClass="custom-dot-list-style"
//           itemClass="carousel-item-padding-40-px"
//         >
//           {this.props.products.map((product) => (
//             <li>
//               <CardDeck>
//                 <Card key={product.id}>
//                   <CardImg
//                     top
//                     width="100%"
//                     src={product.thumbnail}
//                     alt="Card image cap"
//                   />
//                   <CardBody>
//                     <CardTitle tag="h5">{product.name}</CardTitle>
//                     <CardSubtitle tag="h6" className="mb-2 text-muted">
//                       ₺{product.variants[0].price}.00
//                     </CardSubtitle>
//                     <CardText>{/* {product.description} */}</CardText>
//                     <Button color="success">Sepete Ekle</Button>
//                   </CardBody>
//                 </Card>
//               </CardDeck>
//             </li>
//           ))}
//         </Carousel>
