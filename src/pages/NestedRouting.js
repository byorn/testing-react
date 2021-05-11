import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import MyComponent from "../components/MyComponent";

const NestedRouting = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
        <ul>
        <li>
          <Link to={`${url}/mypath1`}>MyPath1</Link>
        </li>
        <li>
          <Link to={`${url}/mypath2`}>MyPath2</Link>
        </li>
         </ul>

<Switch>
        <Route exact path={path}>
        <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/mypath1`}>
        <MyComponent />
        </Route>
</Switch>
</div>

    )
}

export default NestedRouting;