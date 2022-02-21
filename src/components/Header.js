import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button';


const Header = ({title}) => {
const OnClick = () => {
  console.log('Click')
}
  return (
    <header className='header'>
    <h1>{title}</h1>
    <Button color= 'black' text = 'Add' onClick ={OnClick} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task tracker'
}
Header.propTypes = {
  title: PropTypes.string.isRequired
}
export default Header;