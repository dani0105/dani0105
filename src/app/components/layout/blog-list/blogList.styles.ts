import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 1.2rem;
  row-gap: 1.2rem;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;
