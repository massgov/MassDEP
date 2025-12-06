/** src/components/FormDownloadsAsListing.js */

import React from 'react'
import FileDisplayHelper from '../helpers/FileDisplayHelper'
import PropTypes from 'prop-types'

/**
 * Component based on Mayflower organism::form downloads as listing
 * https://mayflower.digital.mass.gov/?p=organisms-form-downloads-as-listing
 */
class FormDownloadsAsListing extends React.Component {
  render () {
    const files = this.props.documents

    if (this.props.documents.length === 0) {
      return (
        <section className='ma__form-downloads ma__form-downloads--listing'>
          <h2 className='ma__comp-heading'>Documents Available for Download</h2>
          <p>No documents were found for the selected Public Water System.</p>
        </section>
      )
    }
    return (
      <section className='ma__form-downloads ma__form-downloads--listing'>
        <div className='ma__form-downloads__links'>
          <h3 className='ma__comp-heading'>Documents for Download</h3>
          {files.map((file, idx) =>
            <div key={file.type + file.ftype + idx} className='ma__download-link '>
              <div className='ma__download-link__icon'>
                {FileDisplayHelper.getSvgIcon((file.ftype))}
              </div>
              <div className='ma__download-link__title'>
                <a className='ma__download-link__file-link' href={file.url} target='_blank' rel='noopener noreferrer'>
                  <span className='visually-hidden'>
                    Open {file.type.toUpperCase()} file, {file.fsize}, for
                  </span>
                  {this.props.fileTypeMap[file.type]} {(file.year ? ' (' + file.year + ')' : '')}
                </a>
                <span className='ma__download-link__file-spec'>
                  ({file.ftype.toUpperCase()} {file.fsize})
                </span>
              </div>
              <div className='ma__download-link__description'>
                <section className='ma__rich-text js-ma-rich-text'>
                  <p>
                    {FileDisplayHelper.getFileDescription(file.type).description}&nbsp;
                  </p>
                  <a className='ma__content-link' href={FileDisplayHelper.getFileDescription(file.type).link} title='' target='_blank' rel='noopener noreferrer'>
                    <span>More information</span>
                  </a>
                </section>
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }
}

FormDownloadsAsListing.propTypes = {
  selectedPws: PropTypes.object.isRequired,
  documents: PropTypes.array.isRequired,
  fileTypeMap: PropTypes.objectOf(PropTypes.string)
}

export default FormDownloadsAsListing
