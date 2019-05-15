import React, { Component } from 'react'

class AddRecipe extends Component {
  state = {
    name: '',
    image: '',
    ingredients: '',
    instructions: ''
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.addRecipe(this.state)

    // Reset form
    let recipe = { ...this.state }
    Object
      .keys(recipe)
      .map(key => {
        return recipe[key] = ''
      })
    this.setState(recipe)
  }

  render() {
    return (
      <div className='card'>
        <form
          className='admin-form ajouter-recette'
          onSubmit={this.handleSubmit}
        >
          <input name='name' type='text' value={this.state.name} onChange={this.handleChange} required placeholder='Name' />
          <input name='image' type='text' value={this.state.image} onChange={this.handleChange} placeholder='Image' />
          <textarea name='ingredients' rows='5' value={this.state.ingredients} onChange={this.handleChange} required placeholder='Ingredients' />
          <textarea name='instructions' rows='15' value={this.state.instructions} onChange={this.handleChange} required placeholder='Instructions' />
          <button type='submit'>+ Add Recipe</button>
        </form>
      </div>
    )
  }
}

export default AddRecipe
