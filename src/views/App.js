import logo from './logo.svg';
import './App.scss';
import MyComponent from '../Example/Mycomponent';
import ListTodos from './Todos/ListTodos';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavComponent from './Nav/Nav';
import HomeCoponent from '../Example/Home'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavComponent />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route exact path='/' component={HomeCoponent} />
            <Route path='/todos' component={ListTodos} />
            <Route path='/about' component={MyComponent} />
          </Switch>
        </header>

        <ToastContainer
          theme='colored'
          position="top-right"
          autoClose={3000}
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
