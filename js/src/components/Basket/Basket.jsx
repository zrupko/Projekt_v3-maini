import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import BasketItem from './BasketItem';
import BasketContext from '../../store/basket-context';
import Checkout from './Checkout';

export default function Basket(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const basketCtx = useContext(BasketContext);

  const totalAmount = `HUF ${basketCtx.totalAmount}`;
  const hasItems = basketCtx.items.length > 0;

  const basketItemRemoveHandler = (id) => {
    basketCtx.removeItem(id);
  };

  const basketItemAddHandler = (item) => {
    basketCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const basketItems = (
    <ul className="basket-items">
      {basketCtx.items.map((item) => (
        <BasketItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={basketItemRemoveHandler.bind(null, item.id)}
          onAdd={basketItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {basketItems}
      <div className="total">
        <span>Összeg</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onClose} />}
      {!isCheckout && (
        <div className="actions">
          <button className="button--alt" onClick={props.onClose}>
            Bezár
          </button>
          {hasItems && (
            <button className="button" onClick={orderHandler}>
              Megrendel
            </button>
          )}
        </div>
      )}
    </Modal>
  );
}
