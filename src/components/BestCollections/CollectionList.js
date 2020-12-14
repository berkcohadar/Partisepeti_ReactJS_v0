import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";


class CollectionList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.slug)
  };
  render() {
    return (
      <Container>
          <ListGroup>
            {this.props.categories.map((category) => (
              <ListGroupItem 
              onClick={()=>this.selectCategory(category)} 
              tag="a" 
              active={category.id === this.props.currentCategory.id}
              key={category.id} 
              href="#">
                {category.name}
              </ListGroupItem>
            ))}
          </ListGroup>
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
      changeCategory:  bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts : bindActionCreators(productActions.getProducts,dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionList);
