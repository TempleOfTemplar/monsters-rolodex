import './App.css';
import React from 'react';
import {CardsList} from "./components/cards-list/cards-list.component";
import {SearchBox} from "./components/search-box/search-box.component"


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({monsters: users})
            })
    }

    handleChange = (e) =>  {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => {
            return monster.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox handleChange={this.handleChange}
                           placeholder='search monsters'/>
                <CardsList monsters={filteredMonsters}>
                </CardsList>
            </div>
        );
    }
}

export default App;
