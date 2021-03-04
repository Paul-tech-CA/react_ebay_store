import styled from "styled-components";

export const ProductFormContainer = styled.div`
  width: 300px;

  label {
    display: block;
    margin: 5px 0;
  }

  input,
  textarea,
  select {
    width: 100%;
    border-radius: 14px;
    border: 1px solid cornflowerblue;
    outline: none;
  }

  textarea {
    min-height: 60px;
  }

  .options {
    display: flex;
    justify-content: space-between;
  }
  button {
    background-color: cornflowerblue;
    color: white;
    text-transform: uppercase;
    border: 1px solid cornflowerblue;
    cursor: pointer;
    display: block;
    margin: 25px auto;
  }
`;
