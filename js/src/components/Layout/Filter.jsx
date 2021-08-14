import FilterForm from './FilterForm';
import FilterStatus from './FilterStatus';

export default function Filter({
  keyword,
  saleOnly,
  selectedCategory,
  filteredProducts,
  handleKeywordChange,
  handleKeywordReset,
  handleCategoryChange,
  handleSaleOnlyChange,
}) {
  // ! this logic has to be shared with other components such as the AvailableProducts so we move it up to the mutual parent component Shop

  // const [keyword, setKeyword] = useState('');
  // const [selectedCategory, setSelectedCategory] = useState(0);
  // const [saleOnly, setSaleOnly] = useState(false);
  // const [loading, setLoading] = useState(true);

  // // ! This is what we need for rendering the products
  // const filteredProducts = useProductFilter(
  //   productslist,
  //   keyword,
  //   selectedCategory,
  //   saleOnly
  // );

  // console.log('*** filteredProducts *** ', filteredProducts)

  // // ! event handlers
  // const handleKeywordChange = ({ target: { value } }) => setKeyword(value)
  // const handleKeywordReset = () => setKeyword('')
  // const handleCategoryChange = ({ target: { value } }) => {
  //   setSelectedCategory(parseInt(value))
  // }
  // const handleSaleOnlyChange = ({ target: { value } }) => setSaleOnly(!value)

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
    <div className="filter">
      <FilterForm
        keyword={keyword}
        selectedCategory={selectedCategory}
        saleOnly={saleOnly}
        onKeywordChange={handleKeywordChange}
        onKeywordReset={handleKeywordReset}
        onCategoryChange={handleCategoryChange}
        onSaleOnlyChange={handleSaleOnlyChange}
      />
      <FilterStatus count={filteredProducts.length} />
    </div>
  );
}

// ! this is basically a custom hook so moved it -> src/hooks/useProductFilter.js

// function getFilteredProducts(
//   productslist,
//   keyword,
//   selectedCategory,
//   saleOnly
// ) {
//   const keywordRegExp = new RegExp(keyword, 'i');

//   const noKeywordFilter = keyword.length < 2;
//   const noCategoryFilter = selectedCategory === 0;
//   const noSaleFilter = saleOnly === false;

//   const filteredProducts = productslist
//     .filter(({ name }) => noKeywordFilter || keywordRegExp.test(name))
//     .filter(({ category }) => noCategoryFilter || category === selectedCategory)
//     .filter(({ sale }) => noSaleFilter || sale);

//   return filteredProducts;
// }
