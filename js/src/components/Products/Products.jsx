import AvailableProducts from './AvailableProducts';
import { Fragment } from 'react';

// FIXME - probably unnecessary to have this component in between Store and AvailableProducts
// ! we are using component drilling and this is a lot of extra code
export default function Products({ filteredProducts }) {
  return (
    <Fragment>
      <AvailableProducts filteredProducts={filteredProducts} />
    </Fragment>
  );
}
