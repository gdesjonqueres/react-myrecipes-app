import React from 'react'

const AdminForm = ({
  id: key,
  recipe,
  updateRecipe,
  deleteRecipe
}) => {
  const handleChange = e => {
    const { name, value } = e.target
    recipe[name] = value
    updateRecipe(key, recipe)
  }

  const handleDelete = () => {
    deleteRecipe(key)
  }

  return (
    <div className='card'>
      <form className='admin-form'>
        <input name='name' type='text' value={recipe.name} onChange={handleChange} required placeholder='Name' />
        <input name='image' type='text' value={recipe.image} onChange={handleChange} placeholder='Image' />
        <textarea name='ingredients' rows='5' value={recipe.ingredients} onChange={handleChange} required placeholder='Ingredients' />
        <textarea name='instructions' rows='15' value={recipe.instructions} onChange={handleChange} required placeholder='Instructions' />
      </form>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default AdminForm
