import styled from "styled-components";

export const Input = styled.input<{ $error?: string }>`
  width: 80%;
  height: 40px;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  // border: 2px solid ${({$error}) => $error ? 'red' : 'grey'};
  color: black;
    position: relative;
`
export const ErrorMessageBlock = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    margin-top: 5px;
    width: 80%;
  
    height: 15px;
    padding: 0 5px;
    caret-color: rgba(255, 255, 255, 0);

    & span {
        color: red;
        min-width: 205px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
    }

`
