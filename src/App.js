import React, { useState } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";
import items from "./data";
import "./styles.css";

const App = () => {
  const [product] = useState(items);
  console.log("this is our data", product);

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Christina's Trinkets</h1>
        <div className="nav-links">
          <NavLink className="some-link" to="/">
            Home
          </NavLink>
          <NavLink to="/item-list">Shop</NavLink>
        </div>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        {/* <Route exact path="/item-list" component={ItemsList} /> */}
        <Route exact path="/item-list">
          <ItemsList items={product} />
        </Route>
        {/* <Route path="/item-list/:dataID" component={Item} /> */}
        <Route path="/item-list/:itemID">
          <Item items={product} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
