import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoudry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            planets: [],

            searchField: '',
            isLoading: true
        }
        // console.log('constructor');
    }

    componentDidMount() {

        this.getPlanets();
        console.log('componentDidMount');
        console.log(this.state.planets);
        
    }

    getPlanets = async () => {
        let response = await fetch('https://swapi.dev/api/planets/')
        let data = await response.json()
        this.setState({ planets: data, isLoading: false });
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        // console.log('render');
        const { planets, isLoading, searchField } = this.state;
        // const filteredPlanets = planets.filter(planet => {
        //     return planet.name.toLowerCase().includes(searchField.toLowerCase());
        // });
        console.log(planets);
        

        if (isLoading) { 
            return <h1 className="tc">Loading...</h1> 
        } else {
            return (
                <div className="tc">
                <h1 id="heading">Kitten Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoudry>
                        <CardList planets={this.state.planets.results} />
                    </ErrorBoudry>
                </Scroll>
            </div>
            )
        }
    }  
}

export default App;