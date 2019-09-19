import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.25rem;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    background: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 1.25rem;

    img {
      align-self: center;
      max-width: 15.625rem;
    }

    > strong {
      color: #333;
      font-size: 1em;
      line-height: 1.25em;
      margin-top: 0.25rem;
    }

    > span {
      font-size: 1.25em;
      font-weight: bold;
      margin: 0.3125em 0 1.25em;
    }

    button {
      background: #7158c1;
      border: 0;
      border-radius: 4px;
      color: #fff;
      display: flex;
      align-items: center;
      margin-top: auto;
      overflow: hidden;
      padding: 0;
      text-transform: uppercase;
      transition: background-color 0.15s ease-out;

      &:focus,
      &:hover {
        background: ${darken(0.1, '#7159c1')};
      }

      div {
        background: rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        padding: 0.75em;

        svg {
          margin-right: 0.3125em;
        }
      }

      span {
        flex: 1;
        font-weight: bold;
        text-align: center;
      }
    }
  }
`;
