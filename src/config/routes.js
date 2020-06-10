import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import GameList from '../pages/GameList'
import GameShow from '../components/GameShow';
import NewGame from '../components/NewGame';
import DeleteGame from '../components/DeleteGame';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    {/* could put exact path above the dynamic path */}
    {/* <Route exact path='/games' component={GameList} /> */}
    {/* put dynamic path above the more generic path if not using exact */}
    <Route path='/games/new' component={NewGame} />
    <Route path='/games/:id/delete' component={DeleteGame} />
    <Route path='/games/:id' component={GameShow} />
    <Route path='/games' component={GameList} />
  </Switch>
)