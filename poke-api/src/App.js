
import './App.css';
import NavBar from './componets/NavBar';
import  Pokedex  from './componets/pokedex';
import SearchBar from './componets/SearchBar';

function App() {
  return (
    <div>
      <NavBar />
      <SearchBar/>
      <Pokedex/>
    </div>
  );
}

export default App;
