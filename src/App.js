
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Shipping from './Components/Shipping/Shipping';
import Shop from './Components/Shop/Shop';
import AuthProvider from './context/AuthProvider';
import { useAuth } from './hooks/useAuth';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/orders">
              <OrderReview></OrderReview>
            </Route>
            <PrivateRoute path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>
            <PrivateRoute path="/shipping">
              <Shipping/>
            </PrivateRoute>
            <PrivateRoute path="/placeorder">
              <PlaceOrder />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            {
              <Route exact path="/*"> && <NotFound></NotFound>
              </Route>
            }
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
