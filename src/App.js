import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Starred from './components/pages/Starred';
import Navs from './components/Navs';

function App() {
  return (
    <div>
      <Navs />
  
    <Switch>
      <Route exact path="/">
       <Home />
       </Route>

       <Route exact path="/starred">
       <Starred />
       </Route>

       <Route>
         This is 404 page
       </Route>

    </Switch>
    </div>
  );
}

export default App;
