import './App.css';
import BankBar from './components/BankBar';
// import AccountIdInput from './components/AccountIdInput';
// import AccountCreditInput from './components/AccountCreditInput';
import BasicTextFields from './components/AccountForm';

function App() {
  return (
    <div className="App">
      <BankBar/>
      {/* <AccountIdInput/> */}
      {/* <AccountCreditInput/> */}
      <BasicTextFields/>
    </div>
  );
}

export default App;
