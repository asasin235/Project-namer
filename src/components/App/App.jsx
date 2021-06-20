import React from 'react'
import './App.css'
import Header from '../Header/Header'
import SearchBox from '../SearchBox/SearchBox'
import ResultsContainer from '../ResultsContainer/ResultsContainer'
import Footer from '../Footer/Footer'

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super()    
    
        this.state = {
        headerText  : 'Name That Project!',
        headerExpand: true,
        suggestedNames: []
        }
    }   

    handleInputChange = (inputText) => {
        this.setState({headerExpand: !(inputText), suggestedNames: inputText? name(inputText) : []})
    }

    render() {
        return (
            <div>
                <Header headerExpand={this.state.headerExpand} headTitle={this.state.headerText} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames = {this.state.suggestedNames} />
                <Footer />
            </div>
        )
    }
}

export default App
