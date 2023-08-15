import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [budget, setBudget] = useState('');
  const [exchange, setExchange] = useState('');
  const [selected, setSelected] = useState(''); 

  const onChange = (event) => {
    setBudget(event.target.value);
  };

  const handleSelect = (event) => {
    setSelected(event.target.value);
    setExchange(parseInt(budget/event.target.value));
  }

  const reset = () => {
    setSelected('');
    setBudget('');
    setExchange('');
  }


  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>

      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={handleSelect} value={selected? selected : ''}>
          <option value=''>Select Coin</option>
          {coins.map((item) => {
            return (
              <option key={item.id} value={item.quotes.USD.price}>
                {item.name} ({item.symbol}): ${item.quotes.USD.price} USD
              </option>
            );
          })}
        </select>
      )}
      <form>
        <div>
          <label htmlFor="budget">Budget: </label>
          <input
            value={budget}
            id="budget"
            onChange={onChange}
            type="number"
            placeholder="How much do you have?"
          /> dollors
        </div>
        <div>
          <label htmlFor="exchange">Exchange: </label>
          <input
            value={exchange === 0? '0' : exchange }
            onChange={onChange}
            id="exchange"
            type="number"
            placeholder="You can have..."
          /> coins
        </div>
      </form>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
