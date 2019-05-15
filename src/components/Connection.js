import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Connection extends Component {
  state = {
    pseudo: '',
    isRedirecting: false
  }

  handleChange = e => {
    const pseudo = e.target.value
    this.setState({ pseudo })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ isRedirecting: true })
  }

  render() {
    if (this.state.isRedirecting) {
      return <Redirect push to={`/mybox/${this.state.pseudo}`} />
    }

    return (
      <div className='connexionBox'>
        <form className='connexion'
          onSubmit={this.handleSubmit}
        >
          <h1>My Recipes Box</h1>
          <input type="text"
            value={this.state.pseudo}
            onChange={this.handleChange}
            required
            pattern='[A-Za-z]{1,}'
            placeholder='Chef Name'
          />
          <button type='submit'>GO!</button>
          <p>No special characters</p>
        </form>
      </div>
    )
  }
}

export default Connection