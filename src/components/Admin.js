import React from 'react'
import AddRecipe from './AddRecipe'
import AdminForm from './AdminForm'

const Admin = ({
  recipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
  fillExempleRecipes
}) => {
  const listForms = Object
    .keys(recipes)
    .map(key => (
      <AdminForm
        key={key}
        id={key}
        recipe={recipes[key]}
        updateRecipe={updateRecipe}
        deleteRecipe={deleteRecipe}
      />
    ))

  return (
    <div className='cards'>
      <AddRecipe addRecipe={addRecipe} />

      {listForms}

      <footer>
        <button onClick={fillExempleRecipes}>Fill</button>
      </footer>
    </div>
  )
}

export default Admin
