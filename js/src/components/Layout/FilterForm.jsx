import { categories } from './../productslist';

export default function FilterForm({
  keyword,
  setKeyword,
  selectedCategory,
  setSelectedCategory,
  saleOnly,
  setSaleOnly,
}) {
  return (
    <form className="filter" onSubmit={(e) => e.preventDefault()}>
      <div className="filter__search">
        <label htmlFor="keyword">Suchbegriff</label>
        <div>
          <input
            type="text"
            id="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            type="button"
            aria-label="Suchbegriff löschen"
            onClick={() => setKeyword('')}
          >
            &times;
          </button>
        </div>
      </div>
      <div className="filter__category">
        <label htmlFor="category">Kategorie</label>
        <select
          name="category"
          id="category"
          onChange={(e) => setSelectedCategory(parseInt(e.target.value))}
          value={selectedCategory}
        >
          <option value="0">Alle Kategorien</option>
          {categories.map(({ categoryId, name }) => (
            <option key={categoryId} value={categoryId}>
              {name}
            </option>
          ))}
        </select>
        <div>
          <label>
            Sonderangebote&nbsp;
            <input
              type="checkbox"
              checked={saleOnly}
              onChange={(e) => setSaleOnly(e.target.checked)}
            />
          </label>
        </div>
      </div>
    </form>
  );
}
