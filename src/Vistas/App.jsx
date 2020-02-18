import React from "react";
// import Nav from "../Components/Nav/Nav.js";
import Table from "../Components/Table/Table.jsx";
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Table} />
        <Route path="/acapulco" component={Table} />
        {/* <Route render={props =><h3>Ruta incorrecta</h3>} /> */}
        {/* <Route path="/" exact component={Table} /> */}
      </Router>
    );
  }
}

export default App;
