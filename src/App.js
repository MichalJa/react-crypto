
import Bitcoin from './Bitcoin.svg';
import './App.css';
import Crypto from './Crypto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Bitcoin} className="App-logo" alt="logo" />
        <h1>Crypto Rate</h1>
      </header>
      <Crypto />
    </div>
  );
}

export default App;
