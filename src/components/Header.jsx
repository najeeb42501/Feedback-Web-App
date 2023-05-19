import React from 'react'
import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }
  const byName = {
    color: 'white',
  }
  return (
    <header style={headerStyles}>
        <div className='container'>
            <h2>{text}</h2>
            <h4 style={byName}>by Najeebullah Khan</h4>
        </div>
    </header>
    
  )
}

Header.defaultProps = {
  text: 'Feedback App',
  bgColor: 'blue',
  textColor: 'black',
}

Header.propType = {
  text: PropTypes.string,
}

export default Header