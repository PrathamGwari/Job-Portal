import Home from './components/Home';
import JobDescription from './components/JobDescription';
import Application from './components/Application';
import SuccessfulSubmit from './components/SuccessfulSubmit';
import ProtectedLogin from './components/ProtectedLogin';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedRegister from './components/ProtectedRegister';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';

import { BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Switch>
          <ProtectedLogin exact path="/login" component={Login}/>
          <Route exact path="/register"><Register/></Route>
          <ProtectedRoute exact path="/jobs" component={Home}/>
          <ProtectedRoute exact path="/jobs/description" component={JobDescription}/>
          <ProtectedRoute exact path="/jobs/apply" component={Application}/>
          <ProtectedRoute exact path="/jobs/submit" component={SuccessfulSubmit}/>
          

          {/* <Route exact path="/jobs"><Home/></Route>
          <Route path="/jobs/description"><JobDescription/></Route>
          <Route path="/jobs/apply"><Application/></Route>
          <Route path="/jobs/submit"><SuccessfulSubmit/></Route> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
