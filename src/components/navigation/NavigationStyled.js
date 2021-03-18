import styled from "styled-components";

export const NavigationListContainer = styled.nav`
  .navLink {
    text-decoration: none;
    margin-right: 30px;
    text-transform: uppercase;
    color: #333;
  }
  .active_navLink {
    border-bottom: 2px solid #000;
    color: #000;
  }
  .navigation-list {
    margin-top: 20px;
    justify-content: center;
    list-style: none;
    display: flex;
  }
`;
