import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router'

function CocktailsIndex(props){
  debugger
  return(
    <div>
      <ul>
        {props.cocktails.map(cocktail => (<li key={cocktail.id}><Link to={`/cocktails/${cocktail.id}`}>{cocktail.name}</Link></li>))}
      </ul>
    </div>
  )
}

const ComponentCreator= connect(mapStateToProps)
export default ComponentCreator(CocktailsIndex)

function mapStateToProps(state, ownProps){
  return {
    cocktails: state.cocktails
  }
}
