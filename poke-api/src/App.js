
import './App.css';
import NavBar from './componets/NavBar';
import SearchBar from './componets/SearchBar';
import { searchPokemon } from ".api"
function App() {
  return (
    <div>
      <NavBar />
      <SearchBar/>
      <div className="App"> </div>
    </div>
  );
}

export default App;
