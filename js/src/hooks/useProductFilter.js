export function useProductFilter(
  productslist,
  keyword,
  selectedCategory,
  saleOnly
) {
  const keywordRegExp = new RegExp(keyword, 'i');

  const noKeywordFilter = keyword.length < 2;
  const noCategoryFilter = selectedCategory === 0;
  const noSaleFilter = saleOnly === false;

  const filteredProducts = productslist
    .filter(({ name }) => noKeywordFilter || keywordRegExp.test(name))
    .filter(({ category }) => noCategoryFilter || category === selectedCategory)
    .filter(({ sale }) => noSaleFilter || sale);

  return filteredProducts;
}
