import styled from 'styled-components';

export const Card = styled.div`
  display: block;
  border: 1px solid rgba(204, 204, 204, 0.75);
  cursor: pointer;
  max-width: 450px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
`;

export const CardBody = styled.div`
  &:hover{
    opacity: 0.7;
  }
`;

export const Tittle = styled.h2`
  
`;

export const Summary = styled.p`
  
`;

export const Date = styled.span`
  
`;
