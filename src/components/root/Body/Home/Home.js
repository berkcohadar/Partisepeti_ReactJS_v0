import React, { Component } from 'react'
import Carousel from "./Carousel"
import BestCollections from "./BestCollections/BestCollections"
import Campaigns from "./Campaigns"

export default class Home extends Component {
    render() {
        return (
            <div>
                <Campaigns></Campaigns>
                <Carousel></Carousel>
                <BestCollections></BestCollections>
            </div>
        )
    }
}
