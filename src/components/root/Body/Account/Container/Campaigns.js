import React, { Component } from 'react'
import { connect } from "react-redux";

class Campaigns extends Component {
    render() {
        return (
            <div>
                <h1>Kampanyalar</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      isAuthenticated: localStorage.getItem("token") != "null",
    };
  }
  export default connect(mapStateToProps)(Campaigns);