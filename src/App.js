import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Bread from './breadcode/Bread';
import CaesarCipher from './caesar-cipher/CaesarCipher';
import Leaderboard from './leaderboard/Leaderboard';

export default function App() {
  return (
    <div>
      {/* <App /> */}
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={Leaderboard} exact />
          <Route path="/bread" component={Bread} exact />
          <Route path="/caesarCipher" component={CaesarCipher} exact />
        </Switch>
      </HashRouter>
    </div>
  )
}
