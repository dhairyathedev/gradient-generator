import { Route, BrowserRouter as Router } from "react-router-dom";
import Linear from "./Linear";
import Radial from "./Radial";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Linear} />
        <Route path="/radial" exact component={Radial} />
      </Router>
    </div>
  );
}
export default App;
