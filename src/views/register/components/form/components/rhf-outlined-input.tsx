import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { useFormContext, Controller } from 'react-hook-form';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';

import { Colors } from '@/enums';

import { StyledOutlinedInput } from './styles';

type Props = OutlinedInputProps & {
  name: string;
};

export function RHFOutlinedInput({ name, type, inputProps, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const valueToShow = field.value;

        return (
          <>
            <InputLabel htmlFor={name}>{other.label}</InputLabel>
            <StyledOutlinedInput
              {...field}
              fullWidth
              id={name}
              type={type}
              value={valueToShow}
              onChange={(event) => {
                field.onChange(event.target.value);
              }}
              inputProps={{ ...inputProps }}
              error={!!error}
              {...other}
            />
            {error && (
              <FormHelperText sx={{ color: Colors.ERROR, fontSize: '12px' }}>
                {error.message}
              </FormHelperText>
            )}
          </>
        );
      }}
    />
  );
}
