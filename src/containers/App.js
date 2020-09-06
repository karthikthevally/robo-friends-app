import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';

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
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter((robot) => {
            return (robot.name.toLowerCase().includes(searchField.toLowerCase()));
        });
        return !robots.length? <h1>Loading ...</h1> : (
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.searchValue}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            
        );
    }
}

export default App;