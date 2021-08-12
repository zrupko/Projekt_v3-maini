import ProductsText from './ProductsText';
import AvailableProducts from './AvailableProducts';
import { Fragment } from 'react';

export default function Products() {
  return (
    <Fragment>
      <ProductsText />
      <AvailableProducts />
    </Fragment>
  );
}
