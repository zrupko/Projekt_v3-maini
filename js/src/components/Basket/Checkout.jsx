export default function Checkout() {
  return (
    <form>
      <div className="control">
        <label htmlFor="name">Nev</label>
        <input type="text" id="name" />
      </div>
      <div className="control">
        <label htmlFor="street">Utca</label>
        <input type="text" id="street" />
      </div>
      <div className="control">
        <label htmlFor="postal">Iranyitoszam</label>
        <input type="text" id="postal" />
      </div>
      <div className="control">
        <label htmlFor="city">Varos</label>
        <input type="text" id="city" />
      </div>
      <button>Megrendelem</button>
    </form>
  );
}
