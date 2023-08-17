import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
