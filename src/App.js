import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from 'components/Navigation';

import Home from 'containers/Home/Loadable';

function App() {
  return (
    <Router basename="/von/jbet">
      <div className="app">
        <Navigation />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

const Wrapper = styled.div`
  margin-top: 100px;
`;

export default App;
