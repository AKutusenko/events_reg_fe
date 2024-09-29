import { Button } from '@mui/material';
import styled from 'styled-components';

import { Colors } from '@/enums';

export const StyledButton = styled(Button)`
  width: 140px;
  margin-top: -10px;
  color: ${Colors.YELLOW};
  background: ${Colors.ORANGE_DARK};
`;

export const Wrapper = styled.div`
  padding: 30px;
  width: 375px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
