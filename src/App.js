import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemList from './components/ItemList/ItemList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemList/>
    </div>
  );
}

export default App;
