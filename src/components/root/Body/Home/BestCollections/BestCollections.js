import React, { Component } from 'react';
import { Row,Col, Container } from 'reactstrap';
import CollectionList from "./CollectionList";
import ProductList from "./ProductList";


export default class BestCollections extends Component {
    render() {
        return (
            <Container>
                <Row>
                <Col xs="3"><CollectionList></CollectionList></Col>
                <Col xs="9"><ProductList></ProductList></Col>
                </Row>
            </Container>
        )
    }
}
