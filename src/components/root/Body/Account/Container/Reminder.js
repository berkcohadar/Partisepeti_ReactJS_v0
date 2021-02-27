import React, { Component } from "react";
import { connect } from "react-redux";

import { Calendar, Alert } from "antd";
import moment from "moment";

export default class Reminder extends Component {
  state = {
    value: moment("2017-01-25"),
    selectedValue: moment("2017-01-25"),
  };
  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { value, selectedValue } = this.state;
    return (
      <>
        <Alert
          message={`Hatırlatma Tarihi: ${
            selectedValue && selectedValue.format("YYYY-MM-DD")
          }`}
        />
        <Calendar
          value={value}
          onSelect={this.onSelect}
          onPanelChange={this.onPanelChange}
        />
      </>
    );
  }
}
