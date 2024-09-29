import { Pagination } from '@mui/material';
import styled from 'styled-components';

import { Colors } from '@/enums';

export const StyledPagination = styled(Pagination)`
  margin: 20px auto 0 auto;
  color: ${Colors.YELLOW};

  .MuiPaginationItem-root {
    color: ${Colors.YELLOW};
  }
`;
