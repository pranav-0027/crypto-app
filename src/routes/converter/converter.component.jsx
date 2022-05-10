import './converter.styles.scss';
import { useEffect, useState } from 'react';
import arrowimg from '../../assets/images/arrow.png'

import CurrencyField from '../../components/currencyfield/currencyfield.component';

const API_URL = 'https://blockchain.info/ticker';

const Converter = () => {
  const [currOptions, setCurrOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [exchangeRate, setExchangeRate] = useState();

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = 'INR';
        const secondCurrency = 'USD';
        setCurrOptions([...Object.keys(data)]);
        setFromCurrency(firstCurrency);
        setToCurrency(secondCurrency);
        const erate = data[secondCurrency].last / data[firstCurrency].last;
        setExchangeRate(erate);
      });
  }, []);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const erate = data[toCurrency].last / data[fromCurrency].last;
        setExchangeRate(erate);
      });
  }, [fromCurrency, toCurrency]);

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };
  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  return (
    <div className='main'>
      <h1>Currency Converter</h1>
      <div className='wrap'>
        <CurrencyField
          currOptions={currOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          amount={fromAmount}
          onChangeAmount={handleFromAmountChange}
        />
				<img src={arrowimg} alt="arrow" />
        <CurrencyField
          currOptions={currOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          amount={toAmount}
          onChangeAmount={handleToAmountChange}
        />
      </div>
    </div>
  );
};

export default Converter;
