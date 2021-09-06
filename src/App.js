import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home";
import People from "./pages/People";
import Navigation from "./pages/percials/Navigation";
import Planets from "./pages/Planets";
import Planet from "./pages/Planet";
import Person from "./pages/Person"
import Film from "./pages/Film"
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <>
      <Navigation />
      <ThemeSwitcher />
      <div className="App">
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route exact path="/people">
            <People />
          </Route>
          <Route exact path="/people/:id">
            <Person />
          </Route>
          <Route exact path="/planets">
            <Planets />
          </Route>
          <Route path="/planets/:id">
            <Planet />
          </Route>
          <Route path="/films/:id">
            <Film />
          </Route>
        </Switch>

     
      </div>
    </>
  );
}

export default App;
