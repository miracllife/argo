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
  componentWillUnmount() {}

  fetchingData = () => {
    const { setTestData } = this.props;
    get("/weather/baidu", { city: "上海", callback: "jsonp_3" }, "/api").then(
      (res) => {
        debugger;
        console.log(res, "res", this.props.home, this.props);
        setTestData([{ a: "a" }, { b: "b" }]);
      }
    );
  };

  render() {
    return (
      <div style={{ listStyle: "none" }}>
        <div
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => this.fetchingData()}
        >
          fetching data
        </div>
      </div>
    );
  }
}

export default Fetch;
