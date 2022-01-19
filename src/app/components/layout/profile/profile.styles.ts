import styled from 'styled-components';

export const ProfileImage = styled.img`
  clip-path: circle();
  max-width: 250px;
  @media (max-width: 768px) {
    width: 50%!important;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
