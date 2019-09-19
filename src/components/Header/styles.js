import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3.125rem 0;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:focus,
  &:hover {
    opacity: 0.7;
  }

  div {
    margin-right: 0.625rem;
    text-align: right;

    strong {
      color: #fff;
      display: block;
    }

    span {
      color: #999;
      font-size: 0.75rem;
    }
  }
`;
