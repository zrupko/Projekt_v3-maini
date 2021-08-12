import {  useContext } from 'react';

import BasketIcon from '../Basket/BasketIcon';
import BasketContext from '../../store/basket-context';

export default function HeaderBasketButton(props) {
  const basketCtx = useContext(BasketContext);

  const numberOfBasketItems = basketCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <BasketIcon />
      </span>
      <span>Kosár</span>
      <span className="badge">{numberOfBasketItems}</span>
    </button>
  );
}
