import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 10px 40px;
  border-bottom: 1px solid black;

  .logo {
    margin-top: -46px;
  }
  .navLink {
    text-decoration: none;
    margin: 0 30px;
    text-transform: uppercase;
  }

  .activeNavLink {
    color: red;
  }
`;
