import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

//Importamos todas las paginas
import { Home } from './pages/Home';
import { Movie } from './pages/Movie';
import { NewMovies } from './pages/New-movies';
import { PopularMovie } from './pages/Popular-movie';
import { Search } from './pages/Search';
import { Error404 } from './pages/Error404';

export default function App() {

  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router>
        <Content>
          <Switch>
            <Route path="/" exact={true}>
              <Home/>
            </Route>
            <Route path="/new-movies" exact={true}>
              <NewMovies/>
            </Route>
            <Route path="/movie/:id" exact={true}>
              <Movie/>
            </Route>
            <Route path="/popular-movie" exact={true}>
              <PopularMovie/>
            </Route>
            <Route path="/serach" exact={true}>
              <Search/>
            </Route>

            <Route path="*">
              <Error404/>
            </Route>

          </Switch>
        </Content>
      </Router>
    </Layout>
  );
}
