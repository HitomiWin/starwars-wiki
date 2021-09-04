import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home";
import People from "./pages/People";
import Navigation from "./pages/percials/Navigation";
import Planets from "./pages/Planets";

function App() {
  return (
    <>
      <Navigation />
      <div className="App">
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/planets">
            <Planets />
          </Route>
        </Switch>

     
      </div>
    </>
  );
}

export default App;
