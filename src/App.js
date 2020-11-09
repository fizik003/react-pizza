import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { fetchPizzas } from "./redux/actions/pizzasAction";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch("http://localhost:3000/db.json")
    //   .then((res) => res.json())
    //   .then((data) => setPizzas(data.pizzas));
    console.log(fetchPizzas);
  }, []);

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
