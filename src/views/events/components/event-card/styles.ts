import styled from 'styled-components';
import { Link } from '@mui/material';

import { Colors } from '@/enums';

export const Card = styled.div`
  padding: 20px 30px;
  height: 215px;
  border: 1px solid ${Colors.YELLOW};
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

export const ItemsGroup = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const LinksGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.ACCENT};
  transition:
    color 0.3s ease,
    text-shadow 0.3s ease;

  &:hover {
    color: ${Colors.MINT};
    text-shadow: 0 0 5px rgba(2, 161, 182, 0.5);
  }
`;
