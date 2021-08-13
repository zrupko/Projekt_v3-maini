import { useState, useEffect } from 'react';

import productslist from '../productslist';
import FilterForm from './FilterForm';
import FilterStatus from './FilterStatus';

export default function Filter() {
  const [keyword, setKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [saleOnly, setSaleOnly] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let title = 'React Filter';
    if (keyword) {
      title = keyword;
    }

    if (saleOnly) {
      title += ' - Sonderangebote';
    }
    document.title = title;
  }, [keyword, saleOnly]);

  useEffect(() => {
    const url = new URL(window.location.href);

    const oldKeyword = url.searchParams.get('keyword');
    if (oldKeyword) {
      setKeyword(oldKeyword);
    }

    const oldSaleOnly = url.searchParams.get('sale');
    if (oldSaleOnly === 'true') {
      setSaleOnly(true);
    }

    const oldCategory = url.searchParams.get('category');
    if (oldCategory) {
      setSelectedCategory(parseInt(oldCategory));
    }

    // "Ladevorgang" ist beendet
    setLoading(false);
  }, []);

  useEffect(() => {
    // Konstruiere ein neues URL-Objekt auf Grundlage der aktuellen Url
    const url = new URL(window.location.href);

    // Entferne eventuellen keyword-Parameter
    url.searchParams.delete('keyword');
    // Falls keyword nicht leer ist, füge den Keyword-Parameter hinzu
    if (keyword) {
      url.searchParams.set('keyword', keyword);
    }

    url.searchParams.delete('sale');
    if (saleOnly) {
      url.searchParams.set('sale', saleOnly);
    }

    url.searchParams.delete('category');
    // Ignoriere Kategorie 0
    if (selectedCategory) {
      url.searchParams.set('category', selectedCategory);
    }

    // Ersetze den aktuellen Eintrag im Browser-Verlauf mit der neu
    // erzeugten URL
    window.history.replaceState({}, '', url);
  }, [keyword, saleOnly, selectedCategory]);

  const filteredProducts = getFilteredProducts(
    productslist,
    keyword,
    selectedCategory,
    saleOnly
  );

  // Stelle beim ersten Durchgang (bei dem die alte URL noch nicht wiederhergestellt
  // wurde) nichts dar, um Flackern zu verhindern.
  if (loading) {
    return null; // Wenn null zurückgegeben wird, wird nichts dargestellt
  }

  return (
    <div className="shop">
      <FilterForm
        keyword={keyword}
        setKeyword={setKeyword}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        saleOnly={saleOnly}
        setSaleOnly={setSaleOnly}
      />
      <FilterStatus count={filteredProducts.length} />
    </div>
  );
}

function getFilteredProducts(products, keyword, selectedCategory, saleOnly) {
  /* Regulärer Ausdruck, um zu testen, ob ein Muster in einem
  anderen String vorkommt. "i" bedeutet "case insensitive",
  also Großschreibung ignorieren.
  Das RegExp-Objekt hat u.a. die Methode test(), um zu prüfen, ob ein String
  die Bedingungen des regulären Ausdrucks erfüllt.
  https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp */
  const keywordRegExp = new RegExp(keyword, 'i');

  // Prüfe, ob weniger als zwei Zeichen eingegeben wurden.
  // Wenn ja, soll der Filter NICHT angewandt werden.
  const noKeywordFilter = keyword.length < 2;
  const noCategoryFilter = selectedCategory === 0;
  const noSaleFilter = saleOnly === false;

  const filteredProducts = productslist
    .filter(({ title }) => noKeywordFilter || keywordRegExp.test(title))
    .filter(({ category }) => noCategoryFilter || category === selectedCategory)
    .filter(({ sale }) => noSaleFilter || sale);

  return filteredProducts;
}

/* 
    1. Erstellt eine Komponente FilterStatus, die die Anzahl der gefilterten
    Produkte darstellt. Also "x Produkte gefunden". Die Komponente soll zwischen
    Filter und Produktliste dargestellt werden.
    Die Anzeige soll in einem div mit der Klasse "filter-status" erscheinen.
    2. Die Komponente soll Kein Produkt / Ein Produkt / x Produkte gefunden...
    ausgeben.
    3. Bonus: Wenn KEIN Produkt gefunden wurde, soll der Text z.B. in rot
    erscheinen. Das div soll zusätzlich die Klasse "filter-status--no-results" haben.
    */
