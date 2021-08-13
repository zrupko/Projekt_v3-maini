import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';
import productslist from '../productslist';

export default function AvailableProducts() {
  const productsList = productslist.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      image={product.image}
      description={product.description}
      price={product.price}
    />
  ));

  return (
    <section className="products">
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
}
