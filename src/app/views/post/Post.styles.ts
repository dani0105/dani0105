import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.div`
  border-bottom: 2px solid #FCA8BC;
`;

export const PostContent = styled.div`
  & img{
    max-width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
`;

export const Back = styled(NavLink)`
  font-size: 1.2rem;
  font-weight: bolder;
  cursor: pointer;
  &:hover{
    opacity: 0.6;
  }
`;

/*
&:before{
    content: '<';
    background-color: #FCA8BC;
    color: white;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    font-weight: bolder;
    font-size: 1.5rem;
    height: 2.2rem;
    width: 2.2rem;
    margin-right: 0.5rem;
  }
  */
