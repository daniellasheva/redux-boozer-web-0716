import React from 'react';
import NavBar from './nav_bar';
import CocktailsIndex from './cocktails_index'
import { Link } from 'react-router';

export default (props) => {
    return (
      <div>
        < NavBar title="Boozr" url="/" />
        <div className='container'>
          { props.children }
        </div>

      </div>
    )
};
