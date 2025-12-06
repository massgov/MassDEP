/** src/components/PwsInfo.js */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * Functional component based on Mayflower molecule::listing table
 * https://mayflower.digital.mass.gov/?p=molecules-listing-table
 */
function PwsInfo (props) {
  let mailAddress
  mailAddress = props.mone + '<br />'
  mailAddress += (props.mtwo === '') ? '' : props.mtwo + '<br />'
  mailAddress += props.mtown + ', ' + props.mstate + ' ' + props.mzip

  return (
    <div className='ma__listing-table'>
      <div className='ma__listing-table__container'>
        <table>
          <tbody>
            <tr>
              <th scope='row'>PWS ID #:</th>
              <td className='ma__rich-text'>
                <span className='ma__listing-table__data-item'>{props.id}</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>Name:</th>
              <td className='ma__rich-text'>
                <span className='ma__listing-table__data-item'>{props.name}</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>Class:</th>
              <td className='ma__rich-text'>
                <span className='ma__listing-table__data-item'>{props.class}</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>Town:</th>
              <td className='ma__rich-text'>
                <span className='ma__listing-table__data-item'>{props.town}</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>Population:</th>
              <td className='ma__rich-text'>
                <span className='ma__listing-table__data-item'>Summer: {props.summer}</span>
                <span className='ma__listing-table__data-item'>Winter: {props.winter}</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>Number of Service Connections:</th>
              <td className='ma__rich-text'>
                <span className='ma__listing-table__data-item'>{props.connections}</span>
              </td>
            </tr>
            <tr>
              <th scope='row'>Mailing Address:</th>
              <td className='ma__rich-text'>
                <span className='ma__listing-table__data-item' dangerouslySetInnerHTML={{ __html: mailAddress }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

PwsInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired,
  town: PropTypes.string.isRequired,
  winter: PropTypes.number,
  summer: PropTypes.number,
  connections: PropTypes.number,
  mone: PropTypes.string,
  mtwo: PropTypes.string,
  mtown: PropTypes.string,
  mstate: PropTypes.string,
  mzip: PropTypes.string
}

export default PwsInfo
