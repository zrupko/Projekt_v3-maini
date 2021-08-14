import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';

export default function AvailableProducts({ filteredProducts }) {
  // ! we need to loop throug the filtered products not the static data that never changes
  const productsList = filteredProducts.map(
    ({ id, name, image, description, price }) => (
      <ProductItem
        key={id}
        id={id}
        name={name}
        image={image}
        description={description}
        price={price}
      />
    )
  );

  return (
    <section className="products">
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
}
