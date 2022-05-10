import './converter.styles.scss';
import { useEffect, useState } from 'react';
import arrowimg from '../../assets/images/arrow.png';

import CurrencyField from '../../components/currencyfield/currencyfield.component';

const API_URL = 'https://blockchain.info/ticker';

const Converter = () => {
  // Creating various states to watch the different parameters
  const [currOptions, setCurrOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [exchangeRate, setExchangeRate] = useState();

  // Logic for checking which textbox is the user applying changes to
  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    // We fetch the json first time for setting the base values
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = 'INR';
        const secondCurrency = 'USD';
        // Creating the option list array
        setCurrOptions([...Object.keys(data)]);
        setFromCurrency(firstCurrency);
        setToCurrency(secondCurrency);
        const erate = data[secondCurrency].last / data[firstCurrency].last;
        setExchangeRate(erate);
      });
  }, []);

  // Use effect that watches change in amount of texboxes
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const erate = data[toCurrency].last / data[fromCurrency].last;
        setExchangeRate(erate);
      });
  }, [fromCurrency, toCurrency]);

  // On change functions for handling amount changes in both text boxes
  const handleFromAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  };
  const handleToAmountChange = (e) => {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  };

  return (
    // applying props to the CurrencyField Component
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
        <img src={arrowimg} alt='arrow' />
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
