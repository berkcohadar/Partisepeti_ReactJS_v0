import React, { Component } from 'react';
import { Container,Row,Col } from 'reactstrap';
import CollectionList from "./CollectionList";
import ProductList from "./ProductList";


export default class BestCollections extends Component {
    render() {
        return (
            <Row>
            <Col xs="3"><CollectionList></CollectionList></Col>
            <Col xs="9"><ProductList></ProductList></Col>
            </Row>
        )
    }
}
