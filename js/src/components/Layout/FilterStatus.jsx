export default function FilterStatus({ count }) {
  const cssClasses = `filter-status ${
    count === 0 ? 'filter-status--no-results' : ''
  }`;

  return <div className={cssClasses}>{getStatusText(count)}</div>;
}

function getStatusText(count) {
  switch (count) {
    case 0:
      return 'Nincs ilyen termék';
    case 1:
      return 'Egy találat a keresésre';
    default:
      return `${count} találat a keresésre`;
  }
}
