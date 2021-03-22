import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Page1 from './Page1';
import Page2 from './Page2';
import RenderProps from './RenderProps';

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
              <Link to="/renderprop">Render Props</Link>
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
          <Route path="/renderprop">
             <RenderProps/>
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
