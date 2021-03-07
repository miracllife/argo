/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { get } from "../utils/http";
import * as homeActions from "../redux/reduces/home";

@connect(
  (state) => ({ home: state.home }),
  (dispatch) => bindActionCreators(homeActions, dispatch)
)
class Fetch extends Component {
  state = {};

  fetchingData = () => {
    const { setTestData } = this.props;
    get("/weather/baidu", { city: "上海", callback: "jsonp_3" }, "/api").then(
      (res) => {
        console.log(res, "res", this.props.home, this.props);
        setTestData([
          { title: "a" },
          { title: "b" },
          { title: "c" },
          { title: "d" },
        ]);
      }
    );
  };

  render() {
    return (
      <div style={{ listStyle: "none" }}>
        <div
          style={{ color: "white", cursor: "pointer", padding: "30px" }}
          onClick={() => this.fetchingData()}
        >
          click this text to fetching data
        </div>
        <div style={{ padding: "30px", color: "white", fontSize: "20px" }}>
          {this.props.home.list.map((_, index) => (
            <div key={index}>{_.title}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Fetch;
