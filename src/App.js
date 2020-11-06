import React, { Component, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { setPizzas } from "./redux/actions/pizzasAction";
// function App() {
//   useEffect(() => {
//     // fetch("http://localhost:3000/db.json")
//     //   .then((res) => res.json())
//     //   .then((data) => setPizzas(data.pizzas));
//     axios
//       .get("http://localhost:3000/db.json")
//       .then(({ data }) => setPizzas(data.pizzas));
//   }, []);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route exact path="/" render={() => <Home items={[]} />} />
//         <Route exact path="/cart" component={Cart} />
//       </div>
//     </div>
//   );
// }

class App extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => this.props.setPizzas(data.pizzas));
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            exact
            path="/"
            render={() => <Home items={this.props.items} />}
          />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.pizzas.items };
};
const mapActionsToProps = {
  setPizzas,
};

export default connect(mapStateToProps, mapActionsToProps)(App);

// export default App;
