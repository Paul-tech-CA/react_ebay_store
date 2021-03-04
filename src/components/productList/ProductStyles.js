import styled from "styled-components";

export const ProductListCont = styled.ul`
  margin-left: 60px;
  list-style: none;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-bottom: -20px;

  .notfound_img {
    width: 100px;
    height: auto;
  }

  .product_item {
    padding-top: 20px;
    width: 180px;
    text-align: center;
    border-radius: 15px;
    margin-right: 15px;
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.445);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  button {
    background-color: cornflowerblue;
    color: white;
    text-transform: uppercase;
    border: 1px solid cornflowerblue;
    cursor: pointer;
    display: block;
    margin-top: 10px;
  }
`;
