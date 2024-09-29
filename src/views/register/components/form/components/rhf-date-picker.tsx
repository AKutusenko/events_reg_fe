import { SetStateAction, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { FormHelperText } from '@mui/material';

import { Colors } from '@/enums';

import { StyledDatePicker } from './styles';

type Props = OutlinedInputProps & {
  name: string;
};

export function RHFDatePicker({ label, name, ...other }: Props) {
  const [date, setDate] = useState('');
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <StyledDatePicker
            {...field}
            label={label}
            minDate={new Date(1900, 0, 1)}
            maxDate={new Date()}
            dateFormat="dd/MM/YYYY"
            selected={date}
            onChange={(date: SetStateAction<string>) => {
              setDate(date);
              field.onChange(date);
            }}
            error={!!error}
          />
          {error && (
            <FormHelperText sx={{ color: Colors.ERROR, fontSize: '12px' }}>
              {error.message}
            </FormHelperText>
          )}
        </>
      )}
    />
  );
}
