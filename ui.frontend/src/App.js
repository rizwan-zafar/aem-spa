import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import Ewallet from './ewallet/Ewallet';;

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
        <Ewallet />
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
