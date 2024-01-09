import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  padding: 16px 20% 16px 20%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  z-index: 2;
  align-items: center;
  width: 100vw;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  gap: 10px;
  position: relative;
  &:hover {
    color: #2980b9;
    cursor: pointer;
    fill: #2980b9;
    

  }
`

export const NavItem = styled.div`
  &:hover {
    color: #2980b9;
    cursor: pointer;
  }
`;
