import React from 'react';
import { connect } from 'react-redux'

function CocktailsShow(props){
  debugger
  return(
    <div>
      <h1>{props.cocktail.name}</h1>
    </div>
  )
}

const ComponentCreator= connect(mapStateToProps)
export default ComponentCreator(CocktailsShow)

function mapStateToProps(state, ownProps){
  const cocktail = state.cocktails.find((cocktail) => {return cocktail.id == ownProps.params.id})
  console.log(cocktail)
  return {cocktail: cocktail}
}
