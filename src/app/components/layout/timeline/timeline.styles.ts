import styled,{ css } from "styled-components";


export const Timeline = styled.div<{left:boolean,intercalate:boolean}>`
  position: relative;
  &:after{
    content: '';
    position: absolute;
    width: 6px;
    background-color: #FCA8BC;
    top: 0;
    bottom: 0;
    left: ${props=>props.intercalate? "50%": props.left? "0":"100%"};
    margin-left: -3px
  }
  &:before{
    content: '';
    position: absolute;
    width: 6px;
    background-color: #FCA8BC;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    ${props => props.intercalate && css`
      left: calc(50% - 13px);     
    `}

    ${props => !props.intercalate && css`
    left: ${props.left? "-13px":"100%"};
    `}
    bottom: 0px;
  }
`;

export const ContainerTime = styled.div<{left:boolean,intercalate:boolean}>`
  padding: 10px 45px;
  position: relative;
  background-color: inherit;
  width: ${props => props.intercalate? '50%':'95%'};

  text-align: ${props => props.left? 'left':'right'};
  left: ${props=>props.intercalate? props.left? '50%':'0px': props.left? "0":"100%"};
  
  &:before{
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -13px;
    background-color: white;
    border: 4px solid #FCA8BC;
    top: 19px;
    border-radius: 50%;
    z-index: 1;
  }

  ${props => props.left && css`
    &:before{
      left: -12px;
    }
  `}

  @media (max-width: 768px) {
    padding-left: ${props => props.left? '15px':'0'};
    padding-right: ${props => !props.left? '15px':'0'};
  }
`;

export const TimelineTitle = styled.div`
  a{
    color: #434242;
  }
`;
