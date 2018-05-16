/* eslint-disable */
import React, { Component } from 'react';
// Import styled first
import styled from 'styled-components';
const StyledComponent = styled('div')`
  background: red;
`;

import OverridenComponent from './OverridenComponent';
import { Card } from './style';

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent>Red</StyledComponent>
        <Card>This card is not overriden, it has a purple background.</Card>
        <OverridenComponent />
      </div>
    );
  }
}

export default App;
