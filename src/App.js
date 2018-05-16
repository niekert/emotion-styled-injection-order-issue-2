import React, { Component } from 'react';
import { Card } from './style';
import OverridenComponent from './OverridenComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Card>This card is not overriden, it has a purple background.</Card>
        <OverridenComponent />
      </div>
    );
  }
}

export default App;
