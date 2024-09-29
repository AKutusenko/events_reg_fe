import { SVGIcon } from '@/components';

import { StyledButton, StyledStack, StyledTypography, Wrapper } from './styles';

type Props = {
  total: number;
  handleTitleSortClick: () => void;
  handleEventDateSortClick: () => void;
  handleOrganizerSortClick: () => void;
};

export function SortBar({
  total,
  handleTitleSortClick,
  handleEventDateSortClick,
  handleOrganizerSortClick,
}: Props): JSX.Element {
  const renderSortBar = () => (
    <Wrapper>
      <StyledTypography>Total count of events: {total}</StyledTypography>

      <StyledStack>
        <StyledButton onClick={handleTitleSortClick}>
          Title
          <SVGIcon name="sort" />
        </StyledButton>

        <StyledButton onClick={handleEventDateSortClick}>
          Event date
          <SVGIcon name="sort" />
        </StyledButton>

        <StyledButton onClick={handleOrganizerSortClick}>
          Organizer
          <SVGIcon name="sort" />
        </StyledButton>
      </StyledStack>
    </Wrapper>
  );

  return renderSortBar();
}
