import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monstersList, setMonstersList] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monstersList);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then(response => response.json())
    .then((users) => setMonstersList(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monstersList.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
     })
     setFilteredMonsters(newFilteredMonsters);
  }, [monstersList, searchField])
  

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase(); 
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'> Cats Rolodex </h1>

      <SearchBox className='monsters-search-box' 
      onSearchHandler={onSearchChange} 
      placeholder='Search cats'/>

      <CardList monstersList={filteredMonsters}/>
    </div> );
}



// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [], 
//       searchField: '',
//     };   
//   }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users') 
  //   .then(response => response.json())
  //   .then((users) => this.setState(() => {
  //     return {monsters: users}
  //   }));
  // }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase(); 
//     this.setState(() => {
//       return {searchField}
//     })
//   }

  
//   render() {
//     console.log('render');
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     })
//     return (
//     <div className="App">
//       <h1 className='app-title'> Cats Rolodex </h1>
//       <SearchBox className='monsters-search-box' onSearchHandler={onSearchChange} placeholder='Search cats'/>
//       <CardList monstersList={filteredMonsters}/>
//     </div> );
// }

// }

export default App;
