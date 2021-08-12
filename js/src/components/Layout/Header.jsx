import { Fragment } from 'react';

import HeaderBasketButton from './HeaderBasketButton';

export default function Header(props) {
  return (
    <Fragment>
      <header className="header">
        <h1>Ajto//Ablak</h1>
        <HeaderBasketButton onClick={props.onShowBasket} />
      </header>
      <div></div>
    </Fragment>
  );
}
