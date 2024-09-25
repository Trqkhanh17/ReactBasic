import logo from './logo.svg';
import './App.scss';
import MyComponent from '../Example/Mycomponent';
import ListTodos from './Todos/ListTodos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hế Lô Mấy Cưng
        </p>
        {/* <MyComponent /> */}
        <ListTodos />
      </header>

      <ToastContainer
        theme='colored'
        position="top-right"
        autoClose={3000}
      />

    </div>
  );
}

export default App;
