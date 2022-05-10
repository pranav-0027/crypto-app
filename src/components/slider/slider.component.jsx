import './slider.styles.scss';

const Slider = () => {
  // Each div holds one slider component
  return (
    <div className='price-container'>
      <div className='price-box'>
        <div className='box-styling'>
          <img
            src='https://bit.ly/3vNs8vh'
            alt='bitcoin logo'
            className='logo-size'
          />
          <div className='inner-box-styling'>
            <h1 className='currency-id btc-size'>BTC/USD</h1>
            <h3 className=' price-styling'>$3300</h3>
            <h3 className='negative-price change-styling'>+10%</h3>
          </div>
        </div>
        <div className='ethereum-box box-styling'>
          <img
            src='https://bit.ly/3kjOn6s'
            alt='ethereum logo'
            className='logo-size'
          />
          <div className='inner-box-styling'>
            <h1 className='currency-id'>ETH/USD</h1>
            <h3 className='price-styling'>$2305</h3>
            <h3 className='positive-price change-styling'>+7.9%</h3>
          </div>
        </div>
        <div className=' box-styling'>
          <img
            src='https://bit.ly/3EMx8o5'
            alt='solana logo'
            className='logo-size'
          />
          <div className='inner-box-styling'>
            <h1 className='currency-id'>SOL/USD</h1>
            <h3 className=' price-styling'>$69</h3>
            <h3 className='negative-price change-styling'>-5%</h3>
          </div>
        </div>
        <div className=' box-styling'>
          <img
            src='https://bit.ly/3KvU0tj'
            alt='binance coin logo'
            className='logo-size'
          />
          <div className='inner-box-styling'>
            <h1 className='currency-id'>BNB/USD</h1>
            <h3 className=' price-styling'>$400</h3>
            <h3 className='positive-price change-styling'>+17%</h3>
          </div>
        </div>
        <div className=' box-styling'>
          <img
            src='https://bit.ly/3xUeI3b'
            alt='xrp ripple logo'
            className='logo-size'
          />
          <div className='inner-box-styling'>
            <h1 className='currency-id'>XRP/USD</h1>
            <h3 className=' price-styling'>$0.7</h3>
            <h3 className='negative-price change-styling'>-1.3%</h3>
          </div>
        </div>
        <div className=' box-styling'>
          <img
            src='https://bit.ly/3veX3BB'
            alt='cardano logo'
            className='logo-size'
          />
          <div className='inner-box-styling'>
            <h1 className='currency-id'>ADA/USD</h1>
            <h3 className=' price-styling'>$0.5</h3>
            <h3 className='positive-price change-styling'>+3%</h3>
          </div>
        </div>
        <div className=' box-styling'>
          <img
            src='https://bit.ly/38sqyqo'
            alt='chainlink logo'
            className='logo-size'
          />
          <div className='inner-box-styling'>
            <h1 className='currency-id'>LINK/USD</h1>
            <h3 className=' price-styling'>$90</h3>
            <h3 className='negative-price change-styling'>-2.5%</h3>
          </div>
        </div>
        <div className=' box-styling'>
          <img
            src='https://bit.ly/3MA7ghB'
            alt='polkadot logo'
            className='logo-size'
          />
          <div className='inner-box-styling'>
            <h1 className='currency-id'>DOT/USD</h1>
            <h3 className=' price-styling'>$26.61</h3>
            <h3 className='positive-price change-styling'>+4%</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
