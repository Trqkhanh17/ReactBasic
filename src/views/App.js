import logo from './logo.svg';
import './App.scss';
import MyComponent from '../Example/Mycomponent';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hế Lô Mấy Cưng
        </p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
