import { useState } from 'react';

import Header from './Layout/Header';
import Products from './Products/Products';
import Basket from './Basket/Basket';
import BasketProvider from '../store/BasketProvider';

export default function Shop() {
  const [basketShow, setBasketShow] = useState(false);

  const showBasketHandler = () => {
    setBasketShow(true);
  };

  const hideBasketHandler = () => {
    setBasketShow(false);
  };

  return (
    <BasketProvider>
      {basketShow && <Basket onClose={hideBasketHandler} />}
      <Header onShowBasket={showBasketHandler} />
      <main>
        <Products />
      </main>
    </BasketProvider>
  );
}
