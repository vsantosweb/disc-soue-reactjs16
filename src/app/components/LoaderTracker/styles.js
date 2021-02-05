import styled from "styled-components";

export const Container = styled.div`
display:inline-block;
  ${props => props.fullContent &&
    `
width:100%;
  height: 100%;
  position:fixed;
  z-index:999999;
  top: 0;
  right: 0;
  display:flex;
  background-color: rgba(0 ,0 ,0, 1);
`}
`;
