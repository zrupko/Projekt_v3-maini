import { categories } from './../productslist';

export default function FilterForm({
  keyword,
  selectedCategory,
  saleOnly,
  onKeywordChange,
  onKeywordReset,
  onCategoryChange,
  onSaleOnlyChange,
}) {
  return (
    <form className="filter" onSubmit={(e) => e.preventDefault()}>
      <div className="filter__search">
        <label htmlFor="keyword">Keresés</label>
        <div>
          <input
            type="text"
            id="keyword"
            value={keyword}
            // no need to use callback function, event is passed in automatically (performance)
            onChange={onKeywordChange}
          />
          <button type="button" aria-label="Töröl" onClick={onKeywordReset}>
            &times;
          </button>
        </div>
      </div>
      <div className="filter__category">
        <label htmlFor="category">Kategória</label>
        <select
          name="category"
          id="category"
          onChange={onCategoryChange}
          value={selectedCategory}
        >
          <option value="0">Összes termék</option>
          {categories.map(({ categoryId, name }) => (
            <option key={categoryId} value={categoryId}>
              {name}
            </option>
          ))}
        </select>
        <div>
          <label>
            Akciós termékek&nbsp;
            <input
              type="checkbox"
              checked={saleOnly}
              onChange={onSaleOnlyChange}
            />
          </label>
        </div>
      </div>
    </form>
  );
}
