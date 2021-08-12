import { useReducer } from 'react';

import BasketContext from "./basket-context"

const defaultBasketState = {
  items: [],
  totalAmount: 0
};

const basketReducer = (state, action) => {
  if(action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount
    }
  }
  return defaultBasketState;
};

const BasketProvider = props =>{
const [basketState, dispatchBasketAction] = useReducer(basketReducer, defaultBasketState)

  const addItemToBasketHandler = (item) => {
    dispatchBasketAction({type: 'ADD', item: item})
  };

  const removeItemfromBasketHandler = (id)  => {
    dispatchBasketAction({type: 'REMOVE', id: id})
  };

  const basketContext ={
    items: basketState.items,
    totalAmount: basketState.totalAmount,
    addItem: addItemToBasketHandler,
    removeItem: removeItemfromBasketHandler,

  }
  return <BasketContext.Provider value={basketContext}>
    {props.children}
  </BasketContext.Provider>
};

export default BasketProvider