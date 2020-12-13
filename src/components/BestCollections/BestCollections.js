import React, { Component } from 'react';
import { Container,Row } from 'reactstrap';
import CollectionList from "./CollectionList";
import ProductList from "./ProductList";


export default class BestCollections extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <CollectionList></CollectionList>
                </Row>
                <Row>
                    <ProductList></ProductList>
                </Row>
            </Container>
                
    
        )
    }
}
