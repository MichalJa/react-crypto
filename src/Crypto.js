import { Component } from "react/cjs/react.production.min";
import './Crypto.css';
import axios from "axios";
import CryptoList from "./CryptoList";


class Crypto extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cryptoList: [],
            filteredCrypto: []
        };
    }

    componentDidMount() {
        this.getCrypto();
        this.timerID = setInterval(() => this.getCrypto(), 5000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    getCrypto = () => {
        axios.get('https://blockchain.info/ticker')
            .then(res => {
                const tickers = res.data;

                this.setState((state) => {
                    let newList = [];

                    for (const [ticker, cryptoRate] of Object.entries(tickers)) {

                        let lastCryptoObject = state.cryptoList.find((cryptoObject) => {
                            return (cryptoObject.currency === ticker);
                        });

                        let newCryptoObject = {
                            currency: ticker,
                            symbol: cryptoRate.symbol,
                            lastRate: cryptoRate.last
                        }

                        if (lastCryptoObject !== undefined) {
                            if (newCryptoObject.lastRate > lastCryptoObject.lastRate) {
                                newCryptoObject.cssClass = 'green';
                                newCryptoObject.htmlArray = String.fromCharCode(8593);
                            } else if (newCryptoObject.lastRate < lastCryptoObject.lastRate) {
                                newCryptoObject.cssClass = 'red';
                                newCryptoObject.htmlArray = String.fromCharCode(8595);
                            } else {
                                newCryptoObject.cssClass = 'blue';
                                newCryptoObject.htmlArray = String.fromCharCode(8596);
                            }
                        } else {
                            newCryptoObject.cssClass = 'blue';
                            newCryptoObject.htmlArray = String.fromCharCode(8596);
                        }


                        newList.push(newCryptoObject);
                    }
                    return ({
                        cryptoList: newList
                    })
                });
                this.listFilter();
            });
    }

    listFilter = () => {
        this._inputFilter.value = this._inputFilter.value.trim().toUpperCase();

        this.setState((state) => {
            let newFilderedCrypto = state.cryptoList.filter((cryptoObject) => {
                return (cryptoObject.currency.includes(this._inputFilter.value));
            });

            return({
                filteredCrypto: newFilderedCrypto
            });

        });

    }


    render() {
        return (
            <div className="Crypto">
                <input ref={e => this._inputFilter = e} onChange={this.listFilter} type="text" placeholder="Filter"></input>
                <CryptoList cryptoList={this.state.filteredCrypto} />
            </div>
        );
    }
}


export default Crypto;