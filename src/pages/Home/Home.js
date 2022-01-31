import React from 'react'
import CardList from '../../components/Card-List/Card-List.component';
import Search from '../../components/Search/Search.component';
import './Home.styles.css'
import {connect} from 'react-redux'
import { searchMonster } from '../../redux/monster/monster.action';
// Component API Life Cycle Methods => useState = {this.state, setState}
// useEffect => ComponentDidMount
import { useState, useEffect } from 'react';
// fetch function that we used in a class component but it got upgraded
// where in you don't json conversion
import axios from 'axios'
import {Container, Row} from 'react-bootstrap'





const Home = (props)=> {
    // this.state, this.setState
    const [monsters, setMonsters] = useState([])
    const {searchName} = props
   
    // Component Did Mount 
    useEffect(async () => {
      const result = await axios('https://jsonplaceholder.typicode.com/users')
      setMonsters(result.data)
    },)
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchName.toLowerCase()))
    const handleSearch = (event)=>{
        const {searchField} = props
        searchField(event.target.value)
    }
    return(
    <>
    <Container>
        
      <div className='App'>
       <Row><h1>Monsters Rolodex</h1></Row>
       <Row><Search handleSearch={handleSearch} /></Row>
       <Row><CardList monsters={filteredMonsters} /></Row>
        
      </div>
      
    </Container>

    </>
)}



// Through Dispatch function => action creator => searchMonster(payload) // Function Call

// searchField: => it runs as a prop in component
const mapDispatchToProps = dispatch =>({
    searchField: username => dispatch(searchMonster(username)) 
})

// State => Store, Search => root reducer, SearchField => Monster Reducer
const mapStateToProps = state =>({
    searchName: state.search.searchField
})
export default connect(mapStateToProps,mapDispatchToProps) (Home) 