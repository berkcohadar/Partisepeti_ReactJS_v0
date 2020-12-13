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
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";

class ProductList extends Component {
    componentDidMount(){
        // this.props.actions.getProducts()
    }

  render() {
    return (
      <Container>
        <h3>{this.props.currentCategory.name}</h3>
        <CardDeck>
            {this.props.products.map(product=>(
                <Card key={product.id}>
                <CardImg
                  top
                  width="100%"
                  src={product.thumbnail}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{product.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {product.variants[0].price}
                  </CardSubtitle>
                  <CardText>
                   {product.description}
                  </CardText>
                  <Button color="success" >Sepete Ekle</Button>
                </CardBody>
              </Card>
            ))}
        </CardDeck>
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
      getProducts : bindActionCreators(productActions.getProducts,dispatch)
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);