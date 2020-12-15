import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";

import { Card, Typography } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Container, Row, Col } from "reactstrap";
import Hoc from "../root/Hoc";

const { Meta } = Card;
const { Title } = Typography;

class ProductsInCollection extends Component {
  componentDidMount() {
    this.props.actions.getProducts(this.props.match.params.slug);
  }
  
  render() {
    return (
      <Container>
        <Row>{this.props.products.map(product => (
          <Hoc>
              {product.variants.map(variant=>(
              <Col xs="3">
              <Card
                hoverable
                cover={<img alt="example" src={variant.thumbnail} />}
                className="collection"
                
              >
                <Meta
                  title={variant.__str__}
                />
                <Title className="prod-price" level={4}>{variant.price} TL</Title>
              </Card>
            </Col>
            ))}
          </Hoc>
        ))}
        </Row>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsInCollection);
