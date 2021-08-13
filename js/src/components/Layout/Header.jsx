import { Fragment } from 'react';

import HeaderBasketButton from './HeaderBasketButton';

export default function Header(props) {
  return (
    <Fragment>
      <header className="header">
        <h1>AJTO//ABLAK</h1>
        <HeaderBasketButton onClick={props.onShowBasket} />
      </header>
      <div></div>
    </Fragment>
  );
}
