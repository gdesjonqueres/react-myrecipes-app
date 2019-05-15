import React from 'react'

const Card = ({ details }) => {
  const listIngr = details.ingredients
    .split(',')
    .map(ingr => <li key={ingr}>{ingr}</li>)
  const listInst = details.instructions
    .split('\n')
    .map(inst => <li key={inst}>{inst}</li>)

  const getImage = (image) => {
    try {
      return require(`../img/${image}`)
    } catch (e) {
      return require('../img/default.jpeg')
    }
  }

  return (
    <div className='card'>
      <div className='image'>
        <img src={getImage(details.image)} alt={details.name} />
      </div>
      <div className='recette'>
        <h2>{details.name}</h2>
        <ul className='liste-ingredients'>{listIngr}</ul>
        <ol className='liste-instructions'>{listInst}</ol>
      </div>
    </div>
  )
}

export default Card
