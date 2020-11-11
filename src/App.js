import React from "react";
import { Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Cart } from "./pages";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

// class App extends Component {
//   componentDidMount() {
//     axios
//       .get("http://localhost:3000/db.json")
//       .then(({ data }) => this.props.setPizzas(data.pizzas));
//   }
//   render() {
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Route
//             exact
//             path="/"
//             render={() => <Home items={this.props.items} />}
//           />
//           <Route exact path="/cart" component={Cart} />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { items: state.pizzas.items };
// };
// const mapActionsToProps = {
//   setPizzas,
// };

// const mapStateToProps = (state) => {
//   return { items: state.pizzas.items };
// };

// const mapActionsToProps = {
//   setPizzas,
// };

// export default connect(mapStateToProps, mapActionsToProps)(App);

export default App;
