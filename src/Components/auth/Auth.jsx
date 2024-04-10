import React from 'react';
import {When} from 'react-if';

import { LoginContext } from './Context.jsx';

class Auth extends React.Component {

  static contextType = LoginContext;

  render() {

    const isLoggedIn = this.context.loggedIn;
    const canDo = this.props.capability ? this.context.can(this.props.capability) : true;
    // canDo is based on capability
    // do they have permission to do the action
    const okToRender = isLoggedIn && canDo;

    return (
      <When condition={okToRender}>
        {this.props.children}
      </When>
    );
  }
}

export default Auth;

