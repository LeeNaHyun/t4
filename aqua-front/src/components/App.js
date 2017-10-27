import React, { Component } from 'react';

import { HomePage, AicPage, OperPage, StarPage, TradePage, RegisterPage } from 'components';
import { Route } from 'react-router-dom';
import { 
  ScreenMaskContainer, 
  LoginModalContainer,
  UserLoader,
  Core
 } from 'containers';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path ="/" component={HomePage}/>
        <Route path="/aic" component={AicPage} />        
        <Route path="/oper" component={OperPage} />        
        <Route path="/star" component={StarPage} />        
        <Route path="/trade" component={TradePage}/>
        <Route path="/register" component={RegisterPage}/>
        <ScreenMaskContainer/>
        <LoginModalContainer/>
        <UserLoader/>
        <Core/>
      </div>
    );
  }
}

export default App;