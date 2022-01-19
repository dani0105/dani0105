import styled from "styled-components";

export const Button = styled.a`
  background-color: transparent;
  padding: 5px 15px 5px 15px;
  border-radius: 5px;
  text-decoration: none;
  border:none;
  color: #8D6F00;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: white; 
    transition-duration: 200ms;
  }

  &.active{
    background-color: #434242;
    color: white;
    transition-duration: 500ms;
  }
`;

export const Container = styled.div`
  position: sticky;
  top: 0px;
  z-index: 2;
  display: block;
  background-color: #FFCC00;
  text-align: center;
  padding: 15px;
  a + a {
    margin-left:15px;
  }

  @media (max-width: 768px) {
    display: none;
  }

`;