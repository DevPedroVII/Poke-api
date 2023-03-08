import { searchPokemon } from './api';
import './App.css';
import NavBar from './componets/NavBar';
import SearchBar from './componets/SearchBar';
import (searchPokemon) from ".api"


function App() {
  return (
    <div>
      <NavBar/>
      <SearchBar
      onSearch={searchPokemon}
      />
      <div className="App"> </div>
    </div>
  );
}

export default App;
