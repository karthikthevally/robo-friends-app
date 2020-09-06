import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => this.setState({robots: users}))
    };
    searchValue = (event) => {
        this.setState({searchField: event.target.value});
    }
    render() {
        const filteredRobots = this.state.robots.filter((robots) => {
            return (robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
        });
        return(
            <div className="tc">
                 <h1>Robo Friends</h1>
                <SearchBox searchChange={this.searchValue}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;