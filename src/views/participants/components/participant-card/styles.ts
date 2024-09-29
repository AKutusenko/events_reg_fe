import styled from 'styled-components';

import { Colors } from '@/enums';

export const Card = styled.div`
  padding: 20px 30px;
  height: 100px;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: ${Colors.ORANGE};
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover,
  &:focus {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: ${Colors.ORANGE_DARK};
  }
`;
