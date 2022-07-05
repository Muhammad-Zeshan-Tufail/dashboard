import './App.css'
import Sidebar from './components/sidebaar/Sidebar';
import Order from "./pages/Order"
import Products from "./pages/Products"
import Analytics from "./pages/Analytics"
import Customers from "./pages/Customers"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="app">
      <div className="app-glass">
        <Router>
          <Sidebar/>
          <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/analytics' element={<Analytics/>} />
          <Route path='/customers' element={<Customers/>} />
          <Route path='/products' element={<Products/>} />
            
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;