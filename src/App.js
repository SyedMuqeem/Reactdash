import './App.css';
import Left from './screens/Left';
import Rightdash from './screens/Rightdash';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import Rightorder from './screens/Rightorder';
import Rightreport from './screens/Rightreport';
import Righthelp from './screens/Righthelp';
import Rightsetting from './screens/Rightsetting';


function App() {
  return (
    <Router>
          
          <div className="main">
          <Left/>
              <Switch>
                <Route exact path="/">
                  <Rightdash/>
                </Route> 
                <Route path="/order">
                    <Rightorder/>
                </Route>
                <Route path="/report">
                    <Rightreport/>
                </Route>
                <Route path="/setting">
                    <Rightsetting/>
                </Route>
                <Route path="/help">
                    <Righthelp/>
                </Route>
              </Switch>
        </div>
    </Router>
  );
}

export default App;
