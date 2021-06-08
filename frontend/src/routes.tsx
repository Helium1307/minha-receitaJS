import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewRecipe from "./components/NewRecipe/NewRecipe";

import Home from "./pages/Home/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register/new-recipe" exact component={NewRecipe} />

      </Switch>
    </BrowserRouter>
  );
}
