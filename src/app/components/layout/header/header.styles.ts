import styled from "styled-components";

export const Container = styled.div`
  background-color: #FFCC00;
  text-align: center;
  color: #434242;     
  padding-top: 50px ;
  padding-bottom: 30px;
`;

export const Title = styled.h1`
  font-weight:500;
  font-size: 40px;
  margin: 0px;
  text-transform: uppercase;
`;

export const SubTittle = styled.h2`
  font-weight:normal;
  margin-top: 20px !important;
  font-size: 24px;
  margin: 0px;
  color: rgba(141,111,0,0.75);
`;


export const SocialMedia = styled.a`
  font-size: 28px;
  cursor: pointer;
  color: #434242;
  &:hover{
    color: white; 
    transition-duration: 200ms;
  }

`;

export const SocialMedias = styled.div`
  margin-top: 35px;

  a + a{
    margin-left:20px;
  }
`;
