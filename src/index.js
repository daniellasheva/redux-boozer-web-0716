import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes'
import {browserHistory, Router} from 'react-router'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import RootReducer from './reducers'
import {fetchCocktails} from './actions'

const store=createStore(RootReducer)

store.dispatch(
  fetchCocktails()
)

ReactDOM.render(
  <Provider store= {store}><Router history={browserHistory} routes={routes}/></Provider>, container

)
