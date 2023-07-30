// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoItem} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoItem
  return (
    <li className="crypto-item">
      <div className="coin-type-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p>{currencyName}</p>
      </div>
      <p className="usd">{usdValue}</p>
      <p className="euro">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
