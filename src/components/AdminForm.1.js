import React, { Component } from 'react'

class AdminForm extends Component {
  state = {
    name: this.props.recipe.name,
    image: this.props.recipe.image,
    ingredients: this.props.recipe.ingredients,
    instructions: this.props.recipe.instructions
  }

  handleChange = e => {
    const { name, value } = e.target
    console.log('change: ', name, value)
    this.setState({ [name]: value })

    this.props.updateRecipe(
      this.props.id,
      this.state
    )
  }

  handleDelete = () => {
    this.props.deleteRecipe(this.props.id)
  }

  render() {
    return (
      <div className='card'>
        <form className='admin-form'>
          <input name='name' type='text' value={this.state.name} onChange={this.handleChange} required placeholder='Name' />
          <input name='image' type='text' value={this.state.image} onChange={this.handleChange} placeholder='Image' />
          <textarea name='ingredients' rows='5' value={this.state.ingredients} onChange={this.handleChange} required placeholder='Ingredients' />
          <textarea name='instructions' rows='15' value={this.state.instructions} onChange={this.handleChange} required placeholder='Instructions' />
        </form>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

export default AdminForm