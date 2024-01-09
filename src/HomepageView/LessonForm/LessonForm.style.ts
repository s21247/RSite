import styled from "styled-components";

export const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  
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
  gap: 15px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Title = styled.h1`

`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px 32px 20px 32px;

`;

export const HeaderForm = styled.div`
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

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;

`;

export const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
`;

export const StyledOption = styled.option`
  font-size: 16px;
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
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    + .radio-label {
      &:before {
        content: '';
        background: #3197EE;
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

export const StyledError = styled.p`
  color: red;
  font-size: 14px;
`

export const StyledSuccess = styled.p`
  color: green;
  font-size: 14px;
`