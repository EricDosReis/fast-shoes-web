import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/56/D12-2759-256/D12-2759-256_zoom1.jpg"
          alt="Tênis"
        />

        <strong>Tenis Nike SB</strong>
        <span>R$ 129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/56/D12-2759-256/D12-2759-256_zoom1.jpg"
          alt="Tênis"
        />

        <strong>Tenis Nike SB</strong>
        <span>R$ 129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/56/D12-2759-256/D12-2759-256_zoom1.jpg"
          alt="Tênis"
        />

        <strong>Tenis Nike SB</strong>
        <span>R$ 129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/56/D12-2759-256/D12-2759-256_zoom1.jpg"
          alt="Tênis"
        />

        <strong>Tenis Nike SB</strong>
        <span>R$ 129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/56/D12-2759-256/D12-2759-256_zoom1.jpg"
          alt="Tênis"
        />

        <strong>Tenis Nike SB</strong>
        <span>R$ 129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-sb-check-solar-cnvs-masculino/56/D12-2759-256/D12-2759-256_zoom1.jpg"
          alt="Tênis"
        />

        <strong>Tenis Nike SB</strong>
        <span>R$ 129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
