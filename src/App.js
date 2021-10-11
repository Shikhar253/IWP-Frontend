import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Homepage} exact />
        
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
