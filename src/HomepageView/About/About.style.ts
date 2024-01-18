import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 20px 32px;
`;

export const Section = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }

`;

export const WrapTopSection = styled.div`
  position: relative;
  display: flex;
  width: 40%;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    width: 100%;
  }

`;

export const DividerLine = styled.div`
  position: absolute;
  top: 67%;
  left: 0;
  right: 0;
  border-top: 1px solid #dee2e6;
  z-index: -1;
`;



export const Title = styled.h1`
  /* dodaj swoje style dla tytułu */
`;

interface StyledNavItemProps {
    isClicked: boolean;
}

export const StyledNavItem = styled.p<StyledNavItemProps>`
  cursor: pointer;
  transition: all 0.5s ease-out;
  color: ${(props) => (props.isClicked ? "black" : "gray")};
  border-bottom: ${(props) =>
    props.isClicked ? "solid green 1px" : "solid #dee2e6 1px"};
  &:hover {
  color: black;
  border-bottom: solid green 1px;
  }
`;
