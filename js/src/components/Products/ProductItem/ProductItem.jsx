import { useContext } from 'react';

import ProductItemForm from './ProductItemForm';
import BasketContext from '../../../store/basket-context';

export default function ProductItem(props) {
  const basketCtx = useContext(BasketContext);

  const price = `HUF ${props.price}`;

  const addToBasketHandler = (amount) => {
    basketCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="product">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="image">{props.image}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <ProductItemForm onAddToBasket={addToBasketHandler} />
      </div>
    </li>
  );
}
