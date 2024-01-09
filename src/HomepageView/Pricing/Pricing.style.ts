import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  z-index: 1;
  padding-bottom: 50px;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
  filter: brightness(27%);
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 20px;
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch; /* Wyrównaj wysokości elementów do najwyższego elementu */
  max-width: 1000px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const PricingElement = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 300px; /* Zmniejszenie wysokości elementu */
  width: 100%;  
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    width: 40%; /* Zmniejszenie szerokości elementu na dużych ekranach */
    margin: 20px;
  }
`;

export const StyledH1 = styled.h1`
  color: white;
  margin-bottom: 20px; /* Dodanie odstępu na dole */
`;

export const PricingHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column; /* Zmiana na kolumnę */
  align-items: center;
  justify-content: center;
  min-width: 100%;


  @media (min-width: 768px) {
    /* Dostosowanie na ekrany o szerokości co najmniej 768px */
    width: 50%;
  }
`;

export const PricingContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PricingList = styled.ul`
  margin-top: 20px;
`;

export const PricingItem = styled.li`
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
`;

export const PricingItemRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Line = styled.div`
  position: absolute;
  border-bottom: solid silver;
  border-bottom-width: 1px;
  width: 100%;
  top: 0;
`

export const styledH3 = styled.h2``;

export const Text = styled.p``;
