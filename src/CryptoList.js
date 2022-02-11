import './CryptoList.css';

function CryptoList(props) {

    let cryptoList = props.cryptoList;

    let listElements = cryptoList.map((cryptoObject) => {
        let symbol = cryptoObject.symbol;
        return (
            <li key={cryptoObject.currency}>
                <span className="LastRate">Last rate:</span>
                <span className={`CryptoRate ${cryptoObject.cssClass}`}>{cryptoObject.lastRate} {cryptoObject.htmlArray}</span>
                <span className="Ticker">{cryptoObject.currency}</span>
                <span className="Symbol">[{
                symbol === 'USD' ? '$': 
                symbol === 'AUD' ? '$': 
                symbol === 'BRL' ? 'R$': 
                symbol === 'CAD' ? '$': 
                symbol === 'CHF' ? 'CHF': 
                symbol === 'CLP' ? '$': 
                symbol === 'CNY' ? '¥': 
                symbol === 'CZK' ? 'Kč': 
                symbol === 'DKK' ? 'kr': 
                symbol === 'EUR' ? '€': 
                symbol === 'GBP' ? '£': 
                symbol === 'HKD' ? 'HK$ / 元': 
                symbol === 'HRK' ? 'kn': 
                symbol === 'HUF' ? 'ft': 
                symbol === 'INR' ? '₹': 
                symbol === 'ISK' ? 'kr': 
                symbol === 'JPY' ? '¥': 
                symbol === 'KRW' ? '₩': 
                symbol === 'PLN' ? 'zł': 
                symbol === 'RON' ? 'lei': 
                symbol === 'RUB' ? '₽': 
                symbol === 'SEK' ? 'kr': 
                symbol === 'SGD' ? '$': 
                symbol === 'THB' ? '฿': 
                symbol === 'TRY' ? '₺': 
                symbol === 'TWD' ? 'NT$': 
                symbol === 'NZD' ? '$': 
                String.fromCharCode(9888) }]</span>
            </li>
        );
    });

    return (
        <div className="CryptoList">
            <ul className="List">
                {listElements}
            </ul>
        </div>
    );
}

export default CryptoList;