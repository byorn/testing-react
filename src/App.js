import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import RenderProps from './pages/RenderProps';
import SignupForm from './pages/SignupForm';
import ContextExample from './pages/ContextExample';
import NestedRouting from './pages/NestedRouting';

function App() {
  return (
    <div className="App">
 
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">Page1</Link>
            </li>
            <li>
              <Link to="/page2">Page2</Link>
            </li>
            <li>
              <Link to="/formik">formik</Link>
            </li>
            <li>
              <Link to="/renderprop">Render Props</Link>
            </li>
            <li>
              <Link to="/context">Context</Link>
            </li>
            <li>
              <Link to="/nestedrouting">Nested Routing</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/page1">
              <Page1/>
          </Route>
          <Route path="/page2">
             <Page2/>
          </Route>
          <Route path="/formik">
             <SignupForm/>
          </Route>
          <Route path="/renderprop">
             <RenderProps/>
          </Route>
          <Route path="/context">
             <ContextExample/>
          </Route>
          <Route path="/nestedrouting">
             <NestedRouting/>
          </Route>
          <Route path="/">
              Hello world
          </Route>
        </Switch>
      </div>
    </Router>
     
 
    </div>
  );
}

export default App;
