import { OutlinedInput } from '@mui/material';
import styled from 'styled-components';

import { Colors } from '@/enums';

export const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 132px;
  left: 45px;
`;

export const ParticipantsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin: auto 0;
`;

export const SearchField = styled(OutlinedInput)`
  padding-left: 50px;
  color: ${Colors.YELLOW};

  .MuiOutlinedInput-notchedOutline {
    border-color: ${Colors.YELLOW};
    transition: border-color 0.3s ease;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${Colors.ORANGE};
  }
`;
