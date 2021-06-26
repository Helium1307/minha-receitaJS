import { BrowserRouter, Switch, Route } from "react-router-dom";

import { NewRecipe } from "./components/NewRecipe/NewRecipe";
import { RecipeType } from "./pages/RecipeType/RecipeType";
import { Home } from "./pages/Home/Home";

import { IsOpenContextProvider } from "./context/IsOpenContextProvider";

export default function Routes() {
  return (
    <IsOpenContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register/new-recipe" exact component={NewRecipe} />
          <Route path="/recipes" exact component={RecipeType} />
        </Switch>
      </BrowserRouter>
    </IsOpenContextProvider>
  );
}
