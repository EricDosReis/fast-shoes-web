import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.section`
  background: #fff;
  border-radius: 4px;
  padding: 1.5rem;

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;

    button {
      background: #7158c1;
      border: 0;
      border-radius: 4px;
      color: #fff;
      display: flex;
      align-items: center;
      font-weight: bold;
      margin: 0;
      overflow: hidden;
      padding: 0.75rem 1.25rem;
      text-transform: uppercase;
      transition: background-color 0.15s ease-out;

      &:focus,
      &:hover {
        background: ${darken(0.1, '#7159c1')};
      }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    padding: 0.75rem;
    text-align: left;
  }

  tbody td {
    border-bottom: 1px solid #eee;
    padding: 0.75rem;
  }

  img {
    height: 6.25rem;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    font-weight: bold;
    display: block;
    margin-top: 0.3125rem;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 0.375rem;
      width: 3.125rem;
    }
  }

  button {
    background: none;
    border: none;
    display: flex;
    padding: 0.375rem;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 1.5em;
    margin-left: 0.3125em;
  }
`;
