import './home.styles.scss';
import sec1 from '../../assets/images/sec1.png';
import crypto1 from '../../assets/images/crypto1.jpg';
import BitcoinSvg from '../../components/bitcoinsvg/bitcoinsvg.component';

const Home = () => {
  return (
    <div className='sections'>
      <div className='first-section'>
        <h1>
          What is <br /> Bitcoin?
        </h1>
        <div className='img1'>
          <img src={sec1} alt='chart' />
        </div>
      </div>
      <div className='second-section container'>
        <p className='heading'>
          Bitcoin is the world’s first widely-adopted cryptocurrency. With
          Bitcoin, people can securely and directly send each other digital
          money on the internet.
        </p>
        <div className='content'>
          <p>
            Bitcoin was created by Satoshi Nakamoto, a pseudonymous person or
            team who outlined the technology in a 2008 white paper. It’s an
            appealingly simple concept: bitcoin is digital money that allows for
            secure peer-to-peer transactions on the internet.
          </p>
          <p>
            Unlike services like Venmo and PayPal, which rely on the traditional
            financial system for permission to transfer money and on existing
            debit/credit accounts, bitcoin is decentralized: any two people,
            anywhere in the world, can send bitcoin to each other without the
            involvement of a bank, government, or other institution.
          </p>

          <img src={crypto1} alt='cryptoimage' />

          <p>
            Unlike services like Venmo and PayPal, which rely on the traditional
            financial system for permission to transfer money and on existing
            debit/credit accounts, bitcoin is decentralized: any two people,
            anywhere in the world, can send bitcoin to each other without the
            involvement of a bank, government, or other institution.
          </p>
          <p>
            Every transaction involving Bitcoin is tracked on the blockchain,
            which is similar to a bank’s ledger, or log of customers’ funds
            going in and out of the bank. In simple terms, it’s a record of
            every transaction ever made using bitcoin.
          </p>
          <p>
            Unlike a bank’s ledger, the Bitcoin blockchain is distributed across
            the entire network. No company, country, or third party is in
            control of it; and anyone can become part of that network.
          </p>
          <p>
            There will only ever be 21 million bitcoin. This is digital money
            that cannot be inflated or manipulated in any way. It isn’t
            necessary to buy an entire bitcoin: you can buy just a fraction of
            one if that’s all you want or need.
          </p>
          <p>
            Since Bitcoin’s creation, thousands of new cryptocurrencies have
            been launched, but bitcoin (abbreviated as BTC) remains the largest
            by market capitalization and trading volume.
          </p>
          <p>
            <strong> Bitcoin is a currency native to the Internet :</strong>{' '}
            Unlike government-issued currencies such as the dollar or euro,
            Bitcoin allows online transfers without a middleman such as a bank
            or payment processor. The removal of those gatekeepers creates a
            whole range of new possibilities, including the potential for money
            to move around the global internet more quickly and cheaply, and
            allowing individuals to have maximum control over their own assets.
          </p>
          <p>
            <strong>Bitcoin is legal to use, hold, and trade,</strong> and can
            be spent on everything from travel to charitable donations. It’s
            accepted as payment by businesses including Microsoft and Expedia.
          </p>
        </div>
      </div>

      <div className='third-section'>
        <BitcoinSvg className='bitsvg' />
        <div className='content'>
          <h2>How Bitcoin works</h2>
          <p>
            Unlike credit card networks like Visa and payment processors like
            Paypal, bitcoin is not owned by an individual or company. Bitcoin is
            the world’s first completely open payment network which anyone with
            an internet connection can participate in. Bitcoin was designed to
            be used on the internet, and doesn’t depend on banks or private
            companies to process transactions. <br />
            One of the most important elements of Bitcoin is the blockchain,
            which tracks who owns what, similar to how a bank tracks assets.
            What sets the Bitcoin blockchain apart from a bank's ledger is that
            it is decentralized, meaning anyone can view it and no single entity
            controls it.
          </p>
        </div>
      </div>

      <div className='fourth-section'>
        <table className='container'>
          <tr>
            <th></th>
            <th className='h1'>Cryptocurrency</th>
            <th className='h2'>Other Currency</th>
          </tr>
          <tr>
            <td>Who manages it?</td>
            <td>
              A network of computers running open source code
            </td>
            <td>
              The government that issues it
            </td>
          </tr>
          <tr>
            <td>How does it hold its value</td>
            <td>
             Primarily based on supply and demand
            </td>
            <td>
              Primarily based on confidence in the government that issues it
            </td>
          </tr>
          <tr>
            <td>How is it secured?</td>
            <td>
             By a network of computers that verify every transaction - anyone with an internet connection can participate
            </td>
            <td>
              By third parties like banks and governments - only a select few can participate
            </td>
          </tr>
          <tr>
            <td>Are there physical bills or coins?</td>
            <td>
             No
            </td>
            <td>
              Yes
            </td>
          </tr>
          <tr>
            <td>Can I buy things with it?</td>
            <td>
             Yes, but only where merchants accept it
            </td>
            <td>
              Yes, but typically only in the country that issues it
            </td>
          </tr>
        </table>
      </div>

      <div className="fifth-section">
          <h1>What is <br/>Blockchain?</h1>
      </div>
    </div>
  );
};

export default Home;
