import { useState } from 'react';
import Header from './Layout/Header';
import Products from './Products/Products';
import Basket from './Basket/Basket';
import BasketProvider from '../store/BasketProvider';
import Filter from './Layout/Filter';
import productslist from './productslist';
import { useProductFilter } from '../hooks/useProductFilter';

export default function Shop() {
  const [basketShow, setBasketShow] = useState(false);

  const [keyword, setKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [saleOnly, setSaleOnly] = useState(false);

  const [loading, setLoading] = useState(true);

  const filteredProducts = useProductFilter(
    productslist,
    keyword,
    selectedCategory,
    saleOnly
  );

  console.log('*** filteredProducts *** ', filteredProducts);

  const handleKeywordChange = ({ target: { value } }) => setKeyword(value);
  const handleKeywordReset = () => setKeyword('');
  const handleCategoryChange = ({ target: { value } }) => {
    setSelectedCategory(parseInt(value));
  };
  const handleSaleOnlyChange = ({ target: { checked } }) =>
    setSaleOnly(checked);

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
        <Products filteredProducts={filteredProducts} />
        <Filter
          keyword={keyword}
          saleOnly={saleOnly}
          selectedCategory={selectedCategory}
          filteredProducts={filteredProducts}
          handleKeywordChange={handleKeywordChange}
          handleKeywordReset={handleKeywordReset}
          handleCategoryChange={handleCategoryChange}
          handleSaleOnlyChange={handleSaleOnlyChange}
        />
      </main>
    </BasketProvider>
  );
}
