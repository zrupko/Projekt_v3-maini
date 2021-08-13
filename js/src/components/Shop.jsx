import { useState } from 'react';

import Header from './Layout/Header';
import Products from './Products/Products';
import Basket from './Basket/Basket';
import BasketProvider from '../store/BasketProvider';
import Filter from './Layout/Filter';

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
      <main className="container">
        <Products />
        <Filter />
      </main>
    </BasketProvider>
  );
}
