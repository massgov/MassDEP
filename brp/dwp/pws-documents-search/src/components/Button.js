/** src/components/Button.js */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * Functional component based on Mayflower atom::button variant::button as small
 * https://mayflower.digital.mass.gov/?p=atoms-button
 */
function Button (props) {
  return (
    <button
      type='button'
      className='ma__button ma__button--small'
      aria-label={props.ariaLabel}
      onClick={props.onHandleFunc}
    >
      {props.text}
    </button>
  )
}

Button.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onHandleFunc: PropTypes.func.isRequired
}

export default Button
