import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbarcomp from "./components/Navbarcomp";
import Roadmap from "./components/Roadmap";
import Interview from "./components/Interview";
import Updates from "./components/Updates";
function App() {
  return (
    <>
      <Navbarcomp />
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/roadmap" component={Roadmap} exact />
        <Route path="/interview" component={Interview} exact />
        <Route path="/updates" component={Updates} exact />

        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
