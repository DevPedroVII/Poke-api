import { searchPokemon } from './api';
import './App.css';
import NavBar from './componets/NavBar';
import SearchBar from './componets/SearchBar';
import {searchPokemon} from ".api"


function App() {
  const onSearchHandler = (pokemon) => {

  }
  return (
    <div>
      <NavBar/>
      <SearchBar
      onSearch={onSearchHandler}
      />
      <div className="App"> </div>
    </div>
  );
}

export default App;
