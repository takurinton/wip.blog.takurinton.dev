import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 60%;
  margin: 50px auto;
`;

export const Category = styled(Link)`
  padding: 5px 10px 6px;
  background: #707070;
  color: white;
  text-decoration: none;
  border-radius: 2px;
  &:hover {
    background: #ff69b4;
  }
`;
