import styled from 'styled-components';
import { Button, Stack, Typography } from '@mui/material';

import { Colors } from '@/enums';

export const Wrapper = styled.div`
  padding: 0 30px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${Colors.YELLOW};
  background: ${Colors.ORANGE};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledStack = styled(Stack)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

export const StyledTypography = styled(Typography)`
  font-size: 23px;
`;

export const StyledButton = styled(Button)`
  color: ${Colors.YELLOW};
`;
