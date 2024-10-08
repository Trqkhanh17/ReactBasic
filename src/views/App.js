import logo from './logo.svg';
import './App.scss';
import MyComponent from '../Example/Mycomponent';
import ListTodos from './Todos/ListTodos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavComponent from './Nav/Nav';
import HomeCoponent from '../Example/Home'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom"
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetaillUser';
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavComponent />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Switch>
            <Route exact path='/' component={HomeCoponent} />
            <Route path='/todos' component={ListTodos} />
            <Route path='/about' component={MyComponent} />
            <Route path='/user' component={ListUser} exact />
            <Route path='/user/:id' component={DetailUser} />
          </Switch>
        </header>

        <ToastContainer
          theme='colored'
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
