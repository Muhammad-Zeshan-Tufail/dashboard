import './App.css'
import MainDash from './components/MainDash/MainDash';
import Sidebar from './components/sidebaar/Sidebar';

function App() {
  return (
    <div className="app">
       <div className="app-glass">
         <Sidebar/>
         <MainDash/>
       </div>
    </div>
  );
}

export default App;