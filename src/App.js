import React from "react";
import LatestMovies from "./features/latestMovies";
import Layout from "./layout/layout";
import Movie from "./pages/movie";
import Search from "./pages/search";
import { SWRConfig } from "swr";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => (
  <SWRConfig
    value={{
      fetcher: (...args) => fetch(...args).then(res => res.json())
    }}
  >
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <LatestMovies />
          </Route>

          <Route path="/:movieId" exact>
            <Movie />
          </Route>

          <Route path="/search/:movieId" exact>
            <Search />
          </Route>
        </Switch>
      </Layout>
    </Router>
  </SWRConfig>
);

export default App;
