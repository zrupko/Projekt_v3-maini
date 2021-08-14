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
  // FIXME - no point of a loading state since this is not async js, everything happens "instantaneously"
  // ! if you want to add a loading spinner just for astetics you will need to add a setTimeout(() => ..., 2000)
  const [loading, setLoading] = useState(true);

  // ! This is what we need for rendering the products
  const filteredProducts = useProductFilter(
    productslist,
    keyword,
    selectedCategory,
    saleOnly
  );

  console.log('*** filteredProducts *** ', filteredProducts);

  // ! event handlers
  const handleKeywordChange = ({ target: { value } }) => setKeyword(value);
  const handleKeywordReset = () => setKeyword('');
  const handleCategoryChange = ({ target: { value } }) => {
    setSelectedCategory(parseInt(value));
  };
  const handleSaleOnlyChange = ({ target: { checked } }) =>
    setSaleOnly(checked);

  // ! not always necessary to have 2 handlers for boolean toggling
  // ! you could do something like handleToggleBasket(() => setBasketShow(!basketShow))
  const showBasketHandler = () => {
    setBasketShow(true);
  };

  const hideBasketHandler = () => {
    setBasketShow(false);
  };

  // FIXME
  // ! I do not see a point in setting/getting URL params. You are not (yet) querying data from a real DB.
  // ! left it here in case you had plans with it

  // useEffect(() => {
  //   const url = new URL(window.location.href);

  //   const oldKeyword = url.searchParams.get('keyword');
  //   if (oldKeyword) {
  //     setKeyword(oldKeyword);
  //   }

  //   const oldSaleOnly = url.searchParams.get('sale');
  //   if (oldSaleOnly === 'true') {
  //     setSaleOnly(true);
  //   }

  //   const oldCategory = url.searchParams.get('category');
  //   if (oldCategory) {
  //     setSelectedCategory(parseInt(oldCategory));
  //   }

  //   setLoading(false);
  // }, []);

  // useEffect(() => {
  //   const url = new URL(window.location.href);

  //   url.searchParams.delete('keyword');

  //   if (keyword) {
  //     url.searchParams.set('keyword', keyword);
  //   }

  //   url.searchParams.delete('sale');
  //   if (saleOnly) {
  //     url.searchParams.set('sale', saleOnly);
  //   }

  //   url.searchParams.delete('category');

  //   if (selectedCategory) {
  //     url.searchParams.set('category', selectedCategory);
  //   }

  //   window.history.replaceState({}, '', url);
  // }, [keyword, saleOnly, selectedCategory]);

  // if (loading) {
  //   return null;
  // }

  return (
    <BasketProvider>
      {basketShow && <Basket onClose={hideBasketHandler} />}
      <Header onShowBasket={showBasketHandler} />
      <main className="container">
        <Products
          // ! this is what you want to use for rendering your product list because these is what we mutate when filtering
          filteredProducts={filteredProducts}
        />
        <Filter
          // ! This is called component drilling witch can get cumbersome and could lead to poor code readibilty in larger scale apps, but perfect for smaller ones
          // ! You could move this state logic into the global state (see basket) and use react Context even with a reducer (see flux pattern)
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
