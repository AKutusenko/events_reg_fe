import { useFormContext, Controller } from 'react-hook-form';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';

type Props = RadioGroupProps & {
  name: string;
  options: { label: string; value: string }[];
  label?: string;
  spacing?: number;
  helperText?: React.ReactNode;
};

export function RHFRadioGroup({ row, name, label, options, spacing, helperText, ...other }: Props) {
  const { control } = useFormContext();

  const labelledby = label ? `${name}-${label}` : '';

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl component="fieldset" sx={{ width: 1 }}>
          {label && (
            <FormLabel component="legend" id={labelledby} sx={{ typography: 'body2' }}>
              {label}
            </FormLabel>
          )}

          <RadioGroup {...field} aria-labelledby={labelledby} row {...other}>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>

          {(!!error || helperText) && (
            <FormHelperText error={!!error} sx={{ mx: 0 }}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
