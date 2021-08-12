import Card from '../UI/Card';
import ProductItem from './ProductItem/ProductItem';

const products = [
  {
    id: 'p1',
    name: 'Ajto-1',
    description: 'Ez egy ajto...',
    price: 11.11,
  },
  {
    id: 'p2',
    name: 'Ajto-2',
    description: 'Ez megegy ajto...',
    price: 22.22,
  },
  {
    id: 'p3',
    name: 'Ablak-1',
    description: 'Ez egy ablak...',
    price: 33.33,
  },
  {
    id: 'p4',
    name: 'Ablak-2',
    description: 'Ez megegy ablak...',
    price: 44.44,
  },
];

export default function AvailableProducts() {
  const productsList = products.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
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
