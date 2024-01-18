import styled from "styled-components";

interface Props {
    isScrolled?: boolean;
    isMobileMenuOpen?: boolean;
}

export const Container = styled.div<Props>`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  align-items: center;
  width: 100vw;
  background-color: ${(props) => (props.isScrolled || props.isMobileMenuOpen ? "white" : "transparent")};
  transition: background-color 1s ease;

`;

export const NavContent = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  gap: 10px;
  position: relative;
  cursor: pointer;

  &:hover {
    color: #2980b9;
    fill: #2980b9;
  }
`;

export const NavItems = styled.div<Props>`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${(props) => (props.isMobileMenuOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const NavItem = styled.div`
  cursor: pointer;

  &:hover {
    color: #2980b9;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
