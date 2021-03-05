/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as homeActions from "../redux/reduces/home";

@connect(
  (state) => ({ home: state.home }),
  (dispatch) => bindActionCreators(homeActions, dispatch)
)
class Position extends Component {
  state = {};
  render() {
    return (
      <ul style={{ listStyle: "none" }}>
        <li style={{ color: "white" }}>flex positioning</li>
        <li
          style={{
            border: "1px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            width: "300p",
          }}
        >
          <div
            style={{
              width: "150px",
              height: "50px",
              border: "1px solid red",
            }}
          >
            flex positioning
          </div>
        </li>
        <li
          style={{
            color: "white",
            display: "grid",
            gridTemplateColumns: "100px 100px 100px",
            gridTemplateRows: "100px 100px 100px",
            border: "1px solid white",
            marginTop: "50px",
            padding: "30px",
          }}
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div style={{ border: "1px solid red" }}>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </li>
      </ul>
    );
  }
}

export default Position;
