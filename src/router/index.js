import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";
import Store from "../redux";
import DevTools from "../redux/DevTools";
import App from "../containers/app";
import Docs from "../containers/docs";
import Position from "../containers/position";
import Fetch from "../containers/fetch";

const Router = ({ component: Component, children, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Component {...props}>
        <Switch>{children}</Switch>
      </Component>
    )}
  />
);

const Root = () => (
  <BrowserRouter>
    <Provider store={Store}>
      <div className="router-content">
        {__DEVELOPMENT__ && <DevTools />}
        <Switch>
          <Router exact path="/" component={App}>
            {/* <Router exact path="/docs" component={Docs} /> */}
          </Router>
          <Router path="/position" component={Position} />
          <Router path="/fetch" component={Fetch} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default hot(module)(Root);
