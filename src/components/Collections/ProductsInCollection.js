import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";

import { Card, Typography,Button,notification,Space } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Container, Row, Col } from "reactstrap";
import Hoc from "../root/Hoc";


const { Meta } = Card;
const { Title } = Typography;

const openNotification = placement => {
  notification.success({
    message: `Ürününüz sepete başarıyla eklendi. ${placement}`,
    duration:2.5,
    // description:
    //   'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement,
  });
};
class ProductsInCollection extends Component {
  componentDidMount() {
    this.props.actions.getProducts(this.props.match.params.slug);
  }
  
  render() {
    return (
      <Container>
         {/* <Button type="primary" onClick={() => openNotification('bottomRight')}>
        <RadiusBottomrightOutlined />
        bottomRight
      </Button> */}
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
                
                <Row className="prod-row justify-content-md-end">
                  <Col>
                <Title level={5}>₺{variant.price},00</Title>
                </Col>
                <Col>
                <Button className="site-button-ghost-wrapper" onClick={() => openNotification('')} ghost>Sepete Ekle</Button>
                </Col>
                </Row>
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
