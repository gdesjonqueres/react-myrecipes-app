import React, { Component } from 'react'
import './App.css'

import base from './base'

import Header from './components/Header'
import defaultRecipes from './recettes'
import Card from './components/Card'
import Admin from './components/Admin'

class App extends Component {
  state = {
    recipes: {}
  }

  componentDidMount() {
    base.syncState(`/${this.props.match.params.pseudo}`, {
      context: this,
      state: 'recipes'
    })
  }

  addRecipe = recipe => {
    let recipes = { ...this.state.recipes }
    recipes[`recipe-${Date.now()}`] = recipe
    this.setState({ recipes })
  }

  updateRecipe = (id, newRecipe) => {
    this.setState({
      recipes: {
        [id]: newRecipe
      }
    })
  }

  deleteRecipe = id => {
    this.setState({
      recipes: {
        [id]: null
      }
    })
  }

  fillExempleRecipes = () => {
    // if (!this.state.recipes) {
    this.setState({ recipes: defaultRecipes })
    // }
  }

  render() {
    let listCards = null
    if (this.state.recipes) {
      listCards = Object
        .keys(this.state.recipes)
        .map(key => (
          <Card key={key}
            details={this.state.recipes[key]}
          />
        ))
    }

    return (
      <div className='box'>
        <Header pseudo={this.props.match.params.pseudo} />
        <div className="cards">
          {listCards}
        </div>
        <Admin
          recipes={this.state.recipes}
          addRecipe={this.addRecipe}
          updateRecipe={this.updateRecipe}
          deleteRecipe={this.deleteRecipe}
          fillExempleRecipes={this.fillExempleRecipes}
        />
      </div>
    )
  }
}

export default App
