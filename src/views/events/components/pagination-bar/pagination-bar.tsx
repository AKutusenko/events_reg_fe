import { StyledPagination } from './styles';

type Props = {
  total: number;
  limit: number;
  setPage: (page: number) => void;
};

export function PaginationBar({ total, limit, setPage }: Props): JSX.Element {
  const getPageCount = (totalEntries: number): number =>
    totalEntries === 0 ? 0 : Math.ceil(totalEntries / limit);

  const handleChangePage = (e: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const renderPaginationBar = () => (
    <StyledPagination
      count={getPageCount(total)}
      onChange={handleChangePage}
      showFirstButton
      showLastButton
      shape="rounded"
    />
  );

  return renderPaginationBar();
}
