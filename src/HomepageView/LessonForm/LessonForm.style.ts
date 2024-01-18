import styled, {keyframes} from "styled-components";
import Select from "react-select";

const $primary = "#11998e";
const $secondary = "#38ef7d";

export const StyledRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  padding: 10px;
`;

export const StyledDays = styled(Select)`
 div{
    /* Stylizacja dla opcji w rozwijanym menu */
   font-size: 12px; /* Przykładowy rozmiar czcionki */
   padding: 2px;
  }
`
export const StyledRowCheckbox = styled.div`
  display: flex;
  width: 60%;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  
`

export const StyledText = styled.p`
  max-width: 300px;
  font-size: 10px;
`

export const StyledRowInput = styled(StyledRow)`
  position: relative;
  max-width: 250px;
  max-height: 100px;
  padding: 10px;

`

export const StyledInput = styled.input`
  max-width: 250px;
  border: 1px solid #9b9b9b;
  outline: 0;
  font-size: 1rem;
  color: black;
  padding: 10px;
  background: transparent;
  transition: border-color 0.5s;

  &:focus {
    font-weight: 500;
    border-width: 3px;
    border-image: linear-gradient(to right, ${$primary}, ${$secondary});
    border-image-slice: 1;
  }
`;
export const StyledSpan = styled.span`
  color: red;
  font-size: 14px;
`

export const StyledForm = styled.form`
  width: 100%;
  max-width: 1000px;
  padding: 16px 48px 16px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Title = styled.h1`

`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px 32px 20px 32px;
`;

export const HeaderForm = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
  input {
    padding: 7px;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  
`;

const appearAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    background-color: #fff;
  }
  45% {
    transform: translate(-50%, -50%) scale(1.6);
    background-color: #64aedf;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.7);
    background-color: #ad97b3;
  }
  55% {
    transform: translate(-50%, -50%) scale(1.6);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    background-color: #ca8489;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;

  input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: transparent;
    position: relative;
  }

  input[type="radio"]:checked::before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: #2ea44f;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${appearAnimation} 0.8s;
  }
`;

export const RadioLabelDisabled = styled(RadioLabel)`
  text-decoration: line-through;
`

export const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
`;

export const StyledOption = styled.option`
  font-size: 16px;
`;

interface StyledOptionProps {
    selected: boolean;
}

export const StyledOptionMultiple = styled.option<StyledOptionProps>`
  /* Dowolne inne style, które chcesz zastosować dla każdej opcji */
  font-size: 16px;
  background-color: ${(props) => (props.selected ? '#2ea44f' : 'white')};
  color: black;
  &:hover {
    background-color: #2ea44f;
    color: black;
  }
`;

export const Button = styled.button`
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 10px 24px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  
  &:hover {
    background-color: black;
  }
`

export const InputRadio = styled.input`
  margin: 0.5rem;
  cursor: pointer;
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    + .radio-label {
      &:before {
        content: '';
        background: #2ea44f;
        border-radius: 100%;
        border: 1px solid darken(#3197EE, 25%);
        display: inline-block;
        width: 1.4em;
        height: 1.4em;
        position: relative;
        top: -0.2em;
        margin-right: 1em;
        vertical-align: top;
        cursor: pointer;
        text-align: center;
        transition: all 250ms ease;
      }
    }
    &:checked {
      
        &:before {
          background-color: black;
          box-shadow: inset 0 0 0 4px #f4f4f4;
        }
      
    }
    &:focus {
        &:before {
          outline: none;
          border-color: #3197EE;
        }
      
    }
`

export const InputRadioDisabled = styled(InputRadio)`

`

export const CheckboxInput = styled.input `
  position: relative; /* Dodaj tę linię */
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  padding: 5px;
  border: 1px solid black;
  transition: background-color 0.3s;

  &:hover {
    border: 1px solid #2ea44f;
  }

  &:checked {
    background-color: #2ea44f;
    border: 1px solid #2ea44f;

    &:before {
      content: "✔";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 10px;
      color: #fff;
      opacity: 1;
      transition: opacity 0.3s;
    }
  }
`


export const StyledError = styled.p`
  color: red;
  font-size: 14px;
`

export const StyledSuccess = styled.p`
  color: #2ea44f;
  font-size: 14px;
`