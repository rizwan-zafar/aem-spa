import { Page, withModel } from '@adobe/aem-react-editable-components';
import React from 'react';
import Ewallet from './ewallet/Ewallet';
import './ewallet/styles/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div className="container" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <Ewallet />
        {this.childComponents}
        {this.childPages}
      </div>
    );
  }
}

export default withModel(App);
