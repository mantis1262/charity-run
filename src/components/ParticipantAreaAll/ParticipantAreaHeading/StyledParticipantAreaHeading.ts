import styled from 'styled-components';

export const StyledHeading = styled.section`
  display: grid;
  justify-items: center;
  gap: 2rem;
  width: 100%;
  text-align: center;

  h1 {
    text-align: center;
    font-size: min(5.625rem, 13.2vw);
    font-weight: 800;
  }

  h2 {
    font-size: min(4.5rem, 10.6vw);
    font-weight: 400;
    white-space: nowrap;
    padding-bottom: min(0.75rem, max(0.6rem, 4vw));
  }

  & > div:not(:first-child) > svg {
    width: 100%;
  }

  .arrows svg {
    height: min(145px, 25vw);
  }

  @media screen and (max-width: 800px) {
    gap: 0.5rem;
  }
`;
