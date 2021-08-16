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
