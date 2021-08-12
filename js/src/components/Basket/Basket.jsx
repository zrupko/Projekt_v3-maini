import Modal from '../UI/Modal';

export default function Basket(props) {
  const basketItems = (
    <ul>
      {[{ id: 'c1', name: 'Müanyag ablak', amount: 2, price: 12.99 }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {basketItems}
      <div className="total">
        <span>Összeg</span>
        <span>123.123</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Bezár
        </button>
        <button className="button">Megrendel</button>
      </div>
    </Modal>
  );
}
