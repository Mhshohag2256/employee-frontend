import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          {/* <Routes>
            <Route path='/' component={ListEmployeeComponent}></Route>
            <Route path='/employees' component={ListEmployeeComponent}></Route>
          </Routes> */}
          <Switch>
            <Route path='/' component={ListEmployeeComponent}></Route>
            <Route path='/employees' component={ListEmployeeComponent}></Route>
            <ListEmployeeComponent />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
