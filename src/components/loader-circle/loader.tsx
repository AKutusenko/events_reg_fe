import { CircularProgress } from '@mui/material';

import { StyledBackdrop } from './styles';

export function LoaderCircle(): JSX.Element {
  return (
    <StyledBackdrop open>
      <CircularProgress color="primary" />
    </StyledBackdrop>
  );
}
