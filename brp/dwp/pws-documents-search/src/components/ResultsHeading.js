/** src/components/ResultsHeading.js */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * Functional component based on Mayflower molecule::results heading
 * https://mayflower.digital.mass.gov/?p=molecules-results-heading
 */
function ResultsHeading (props) {
  return (
    <div className='ma__results-heading js-results-heading'>
      <div className='ma__results-heading__container'>
        <div className='ma__results-heading__title'>
          Showing {props.totalRecordCount > 0 ? '1-' + props.totalRecordCount : '0-0'} of {props.totalRecordCount} results for:
        </div>
      </div>
    </div>
  )
}

ResultsHeading.propTypes = {
  totalRecordCount: PropTypes.number.isRequired,
  pws: PropTypes.object.isRequired
}

export default ResultsHeading
