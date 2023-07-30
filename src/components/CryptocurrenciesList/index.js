// Write your JS code here
import './index.css'

import Loader from 'react-loader-spinner'

import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.fetchCryptoData()
  }

  fetchCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    console.log(updatedData)
    this.setState({cryptoList: updatedData, isLoading: false})
  }

  renderCrptoList = () => {
    const {cryptoList} = this.state
    return (
      <div className="crypto-list-container">
        <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-currency"
        />
        <div className="crypto-table">
          <div className="heading-row-table">
            <h1 className="table-heading-1">Coin Type</h1>
            <h1 className="table-heading-2">USD</h1>
            <h1 className="table-heading-3">EURO</h1>
          </div>
          <div>
            {cryptoList.map(eachItem => (
              <CryptocurrencyItem key={eachItem.id} cryptoItem={eachItem} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCrptoList()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
