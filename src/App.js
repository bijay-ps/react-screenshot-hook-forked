import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Download from "./components/Download";
import Image from "./components/Image";
import Icons from "./components/Icons";
import Charts from "./components/Charts";

export default () => {
  return (
    <Router>
      <h1>Examples</h1>
      <ul>
        <li>
          <Link to="/download"> Download </Link> -{" "}
          <code>/components/Download.js</code>
        </li>{" "}
        <li>
          <Link to="/image"> Image </Link> - <code>/components/Image.js</code>
        </li>
        <li>
          <Link to="/icons"> Icons/SVG's/Emojis </Link> -{" "}
          <code>/components/Icons.js</code>
        </li>
        <li>
          <Link to="/charts"> Charts </Link> -{" "}
          <code>/components/Charts.js</code>
        </li>
      </ul>

      <hr />

      <Switch>
        <Route path="/download" component={Download} />
        <Route path="/image" component={Image} />
        <Route path="/icons" component={Icons} />
        <Route path="/charts" component={Charts} />
      </Switch>
    </Router>
  );
};
