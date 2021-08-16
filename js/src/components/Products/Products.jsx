import AvailableProducts from './AvailableProducts';
import { Fragment } from 'react';

export default function Products({ filteredProducts }) {
  return (
    <Fragment>
      <AvailableProducts filteredProducts={filteredProducts} />
    </Fragment>
  );
}
