import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Page1 from './pages/Page1';
import ReducerExample from './pages/ReducerExample';
import RenderProps from './pages/RenderProps';
import SignupForm from './pages/SignupForm';
import ContextExample from './pages/ContextExample';
import ContextExample2 from './pages/ContextExample2';
import NestedRouting from './pages/NestedRouting';
import CodeReusePattern from './pages/CodeReusePattern';
import TestingThis from './components/TestingThis';

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
              <Link to="/useReducer">UseReducerDemo</Link>
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
              <Link to="/context2">Context 2</Link>
            </li>
            <li>
              <Link to="/codereuse">Code Reuse Patterns</Link>
            </li>
            <li>
              <Link to="/nestedrouting">Nested Routing</Link>
            </li>
            <li>
              <Link to="/testingthis">Testing This Keyword</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/page1">
              <Page1/>
          </Route>
          <Route path="/useReducer">
             <ReducerExample/>
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
          <Route path="/context2">
             <ContextExample2/>
          </Route>
          <Route path="/codereuse">
             <CodeReusePattern/>
          </Route>
          <Route path="/nestedrouting">
             <NestedRouting/>
          </Route>
          <Route path="/testingthis">
             <TestingThis/>
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
