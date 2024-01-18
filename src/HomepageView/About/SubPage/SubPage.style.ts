import styled from "styled-components";

interface props {
    isReversed: boolean;
}
export const BottomSection = styled.div<props>`
  display: flex;
  gap: 20px;
  flex-direction: ${(props) => (props.isReversed ? "row-reverse" : "row")};
  opacity: 1;
  transition: margin-right 4s;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

`;

export const BottomSectionText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px; /* dostosuj szerokość według potrzeb */
  word-wrap: break-word; /* pozwala na łamanie tekstu na końcu linii */
  overflow-wrap: break-word;
  font-size: 16px;
  padding: 10px;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }

`;

export const ImageContainer = styled.div`
  position: relative;
  max-width: 600px;
  height: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: auto; 
`;