import React, { Component } from 'react';
// Import styled first
import styled from 'styled-components';
import OverridenComponent from './OverridenComponent';
import { Card } from './style';

const StyledComponent = styled.div`
  background: red;
`;

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
