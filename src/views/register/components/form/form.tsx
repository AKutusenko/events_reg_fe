import { Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';

import { AppRoute, RegisterFields } from '@/enums';
import { useRegisterMutation } from '@/store/api';
import { LoaderCircle } from '@/components';

import { YupSchema } from './schema';
import { StyledButton, Wrapper } from './styles';
import { Block, FormProvider, RHFOutlinedInput, RHFDatePicker, RHFRadioGroup } from './components';

type Props = {
  eventId: string;
};

type Error = {
  status: number;
  data: {
    message: string;
  };
};

const { FULL_NAME, EMAIL, BIRTH_DATE, COME_FROM } = RegisterFields;

const COME_FROM_OPTIONS = [
  { label: 'Friends', value: 'friends' },
  { label: 'Social media', value: 'social media' },
  { label: 'Myself', value: 'found myself' },
];

export function Form({ eventId }: Props): JSX.Element {
  const [register] = useRegisterMutation();

  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(YupSchema),
    defaultValues: {
      [FULL_NAME]: '',
      [EMAIL]: '',
      [BIRTH_DATE]: new Date(),
      [COME_FROM]: '',
    },
    mode: 'onTouched',
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data): Promise<void> => {
    const { fullName, email, birthDate, comeFrom } = data;

    const participant = {
      fullName,
      email,
      birthDate,
      comeFrom,
      eventId,
    };

    try {
      await register(participant).unwrap();

      router.push(AppRoute.EVENTS);
      enqueueSnackbar('Participant has been added!', { variant: 'success' });
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'status' in error) {
        const typedError = error as Error;

        if (typedError.status === 409) {
          enqueueSnackbar(typedError.data.message, { variant: 'error' });
        } else {
          enqueueSnackbar('Something went wrong', { variant: 'error' });
        }
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }
    }
  });

  return (
    <>
      {isSubmitting && <LoaderCircle />}

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Wrapper>
          <Typography variant="h3">Event registration</Typography>

          <Block label="Full name">
            <RHFOutlinedInput name={FULL_NAME} autoComplete="name" />
          </Block>

          <Block label="Email">
            <RHFOutlinedInput name={EMAIL} autoComplete="email" />
          </Block>

          <Block label="Date of birth">
            <RHFDatePicker name={BIRTH_DATE} autoComplete="birthdate" />
          </Block>

          <Block label="Where did you here about this event?">
            <RHFRadioGroup name={COME_FROM} options={COME_FROM_OPTIONS} />
          </Block>

          <StyledButton type="submit">Register</StyledButton>
        </Wrapper>
      </FormProvider>
    </>
  );
}
