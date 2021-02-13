import Balance from './components/balance';
import Header from './components/header';
import History from './components/history';
import Transaction from './components/transaction';
import GlobalProvider from './context/globalState';

import './App.css';




function App() {
  return (
    
    <GlobalProvider>
      <div className="container">
        <Header/>
        <Balance/>
        <History/>
        <Transaction/>
      </div>
    </GlobalProvider>
    
  );
}

export default App;
