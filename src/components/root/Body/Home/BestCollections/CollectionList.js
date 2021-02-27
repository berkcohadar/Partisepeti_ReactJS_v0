import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../../../../redux/actions/categoryActions";
import * as productActions from "../../../../../redux/actions/productActions";
import { Menu, Button } from "antd";

class CollectionList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
    // this.selectCategory(this.props.categories[0]);
  }
  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.slug);
  };

  render() {
    return (
      <Container>
        <Menu mode="inline" theme="light" className="best-collections-menu">
          {this.props.categories.map((category) => (
            <Menu.Item
              key={category.id}
              onClick={() => this.selectCategory(category)}
              href="#"
              active={category.id === this.props.currentCategory.id}
            >
              {category.name}
            </Menu.Item>
          ))}
        </Menu>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList);
