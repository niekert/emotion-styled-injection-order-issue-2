import React from 'react';
import { Card } from './style';
import styled from 'styled-components';

const OverrideCard = styled(Card)`
  background: green;
`;

export default function LoadableComponent() {
  return (
    <OverrideCard>
      This card is overriden. It should have a green background
    </OverrideCard>
  );
}
