import './home.styles.scss';
import sec1 from '../../assets/images/sec1.png';
import crypto1 from '../../assets/images/crypto1.jpg';
import BitcoinSvg from '../../components/bitcoinsvg/bitcoinsvg.component';
import BlochainSvg from '../../assets/svg/blockchain-1.svg';
import crypto2 from '../../assets/images/crypto2.jpg';
import Slider from '../../components/slider/slider.component';

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
        <tbody>
          <tr>
            <th></th>
            <th className='h1'>Cryptocurrency</th>
            <th className='h2'>Other Currency</th>
          </tr>
          <tr>
            <td>Who manages it?</td>
            <td>A network of computers running open source code</td>
            <td>The government that issues it</td>
          </tr>
          <tr>
            <td>How does it hold its value</td>
            <td>Primarily based on supply and demand</td>
            <td>
              Primarily based on confidence in the government that issues it
            </td>
          </tr>
          <tr>
            <td>How is it secured?</td>
            <td>
              By a network of computers that verify every transaction - anyone
              with an internet connection can participate
            </td>
            <td>
              By third parties like banks and governments - only a select few
              can participate
            </td>
          </tr>
          <tr>
            <td>Are there physical bills or coins?</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Can I buy things with it?</td>
            <td>Yes, but only where merchants accept it</td>
            <td>Yes, but typically only in the country that issues it</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div className='fifth-section'>
        <h1>
          What is <br />
          Blockchain?
        </h1>
        <img src={BlochainSvg} alt='Blockchain Svg' />
      </div>

      <div className='sixth-section container'>
        <p className='heading'>
          A blockchain is a distributed database that is shared among the nodes
          of a computer network
        </p>
        <div className='content'>
          <p>
            As a database, a blockchain stores information electronically in
            digital format. Blockchains are best known for their crucial role in
            cryptocurrency systems, such as Bitcoin, for maintaining a secure
            and decentralized record of transactions. The innovation with a
            blockchain is that it guarantees the fidelity and security of a
            record of data and generates trust without the need for a trusted
            third party.
          </p>
          <p>
            One key difference between a typical database and a blockchain is
            how the data is structured. A blockchain collects information
            together in groups, known as blocks, that hold sets of information.
            Blocks have certain storage capacities and, when filled, are closed
            and linked to the previously filled block, forming a chain of data
            known as the blockchain. All new information that follows that
            freshly added block is compiled into a newly formed block that will
            then also be added to the chain once filled.
          </p>
          <p>
            A database usually structures its data into tables, whereas a
            blockchain, like its name implies, structures its data into chunks
            (blocks) that are strung together. This data structure inherently
            makes an irreversible timeline of data when implemented in a
            decentralized nature. When a block is filled, it is set in stone and
            becomes a part of this timeline. Each block in the chain is given an
            exact time stamp when it is added to the chain.
          </p>
          <h2>How Does a Blockchain Work?</h2>
          <p>
            The goal of blockchain is to allow digital information to be
            recorded and distributed, but not edited. In this way, a blockchain
            is the foundation for immutable ledgers, or records of transactions
            that cannot be altered, deleted, or destroyed. This is why
            blockchains are also known as a distributed ledger technology (DLT).
          </p>
          <p>
            First proposed as a research project in 1991, the blockchain concept
            predated its first widespread application in use: Bitcoin, in 2009.
            In the years since, the use of blockchains has exploded via the
            creation of various cryptocurrencies, decentralized finance (DeFi)
            applications, non-fungible tokens (NFTs), and smart contracts.
          </p>
          <h2>Blockchain Decentralization</h2>
          <img src={crypto2} alt='blockchain img' />
          <p>
            Imagine that a company owns a server farm with 10,000 computers used
            to maintain a database holding all of its client’s account
            information. This company owns a warehouse building that contains
            all of these computers under one roof and has full control of each
            of these computers and all of the information contained within them.
            This, however, provides a single point of failure. What happens if
            the electricity at that location goes out? What if its Internet
            connection is severed? What if it burns to the ground? What if a bad
            actor erases everything with a single keystroke? In any case, the
            data is lost or corrupted.
          </p>
          <p>
            What a blockchain does is to allow the data held in that database to
            be spread out among several network nodes at various locations. This
            not only creates redundancy but also maintains the fidelity of the
            data stored therein—if somebody tries to alter a record at one
            instance of the database, the other nodes would not be altered and
            thus would prevent a bad actor from doing so. If one user tampers
            with Bitcoin’s record of transactions, all other nodes would
            cross-reference each other and easily pinpoint the node with the
            incorrect information. This system helps to establish an exact and
            transparent order of events. This way, no single node within the
            network can alter information held within it.
          </p>
          <p>
            Because of this, the information and history (such as of
            transactions of a cryptocurrency) are irreversible. Such a record
            could be a list of transactions (such as with a cryptocurrency), but
            it also is possible for a blockchain to hold a variety of other
            information like legal contracts, state identifications, or a
            company’s product inventory.
          </p>
          <h2>Is Blockchain Secure?</h2>
          <p>
            Blockchain technology achieves decentralized security and trust in
            several ways. To begin with, new blocks are always stored linearly
            and chronologically. That is, they are always added to the “end” of
            the blockchain. After a block has been added to the end of the
            blockchain, it is extremely difficult to go back and alter the
            contents of the block unless a majority of the network has reached a
            consensus to do so. That’s because each block contains its own hash,
            along with the hash of the block before it, as well as the
            previously mentioned time stamp. Hash codes are created by a
            mathematical function that turns digital information into a string
            of numbers and letters. If that information is edited in any way,
            then the hash code changes as well.
          </p>
          <p>
            Succeeding with such a hack would require that the hacker
            simultaneously control and alter 51% or more of the copies of the
            blockchain so that their new copy becomes the majority copy and,
            thus, the agreed-upon chain. Such an attack would also require an
            immense amount of money and resources, as they would need to redo
            all of the blocks because they would now have different time stamps
            and hash codes.
          </p>
          <p>
            Due to the size of many cryptocurrency networks and how fast they
            are growing, the cost to pull off such a feat probably would be
            insurmountable. This would be not only extremely expensive but also
            likely fruitless. Doing such a thing would not go unnoticed, as
            network members would see such drastic alterations to the
            blockchain. The network members would then hard fork off to a new
            version of the chain that has not been affected. This would cause
            the attacked version of the token to plummet in value, making the
            attack ultimately pointless, as the bad actor has control of a
            worthless asset. The same would occur if the bad actor were to
            attack the new fork of Bitcoin. It is built this way so that taking
            part in the network is far more economically incentivized than
            attacking it.
          </p>
        </div>
      </div>

      <div className='seventh-section'>
        <div className='wrapper'>
          <div className='div-1'>
            <div className='content'>
              <h1>Blockchain</h1>
              <p>
                Blockchain technology was first outlined in 1991 by Stuart Haber
                and W. Scott Stornetta, two researchers who wanted to implement
                a system where document time stamps could not be tampered with.
                But it wasn’t until almost two decades later, with the launch of
                Bitcoin in January 2009, that blockchain had its first
                real-world application.
              </p>
              <p>
                The key thing to understand here is that Bitcoin merely uses
                blockchain as a means to transparently record a ledger of
                payments, but blockchain can, in theory, be used to immutably
                record any number of data points. As discussed above, this could
                be in the form of transactions, votes in an election, product
                inventories, state identifications, deeds to homes, and much
                more.{' '}
              </p>
            </div>
          </div>
          <div className='div-2'>
            <div className='content'>
              <h1>Bitcoin</h1>
              <p>
                The Bitcoin protocol is built on a blockchain. In a research
                paper introducing the digital currency, Bitcoin’s pseudonymous
                creator, Satoshi Nakamoto, referred to it as “a new electronic
                cash system that’s fully peer-to-peer, with no trusted third
                party.”
              </p>
              <p>
                Currently, tens of thousands of projects are looking to
                implement blockchains in a variety of ways to help society other
                than just recording transactions—for example, as a way to vote
                securely in democratic elections. The nature of blockchain’s
                immutability means that fraudulent voting would become far more
                difficult to occur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='eighth-section'>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
