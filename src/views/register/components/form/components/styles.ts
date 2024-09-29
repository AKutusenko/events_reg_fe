import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { OutlinedInput } from '@mui/material';

import { Colors } from '@/enums';

type StyledDatePickerProps = {
  error?: boolean;
};

export const StyledDatePicker = styled(DatePicker)<StyledDatePickerProps>`
  width: 345px;
  height: 50px;
  padding: 0 14px;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid ${({ error }) => (error ? Colors.ERROR : Colors.YELLOW)};
  color: ${Colors.YELLOW};
  background: ${Colors.MINT};
  transition: border-color 0.3s ease;

  &:hover,
  &:focus {
    border: 1px solid ${Colors.ORANGE};
  }
`;

export const StyledOutlinedInput = styled(OutlinedInput)`
  color: ${Colors.YELLOW};

  .MuiOutlinedInput-notchedOutline {
    border-color: ${Colors.YELLOW};
    transition: border-color 0.3s ease;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${Colors.ORANGE};
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${Colors.ORANGE};
  }
`;
