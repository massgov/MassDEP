/** src/components/FormDownloadsAsListing.js */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component based on Mayflower organism::form downloads as listing
 * https://mayflower.digital.mass.gov/?p=organisms-form-downloads-as-listing
 */
class FormDownloadsAsListing extends React.Component {
  render () {
    const docs = this.props.documents

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
        <h2 className='ma__comp-heading'>Documents Available for Download</h2>
        <ul className='downloads-list'>
          {docs.map((docType, idx) => (
            docType.files.length > 0
              ? (
                <li key={docType.type + idx} className='downloads-list__category'>
                  <h3 className='ma__comp-heading ma__comp-heading--yellow'>{this.props.fileTypeMap[docType.type]}</h3>
                  <p>
                    {docType.type === 'asr' &&
                      <span>The <a href='https://www.mass.gov/service-details/public-water-supplier-document-search-information' target='_blank' rel='noopener noreferrer'>Annual Statistical Report</a> is an annual report submitted by the PWS capturing basic data such as a PWS&apos; inventory, staffing and contact information, pumping volumes, etc..</span>}
                    {docType.type === 'cms' &&
                      <span>The <a href='https://www.mass.gov/service-details/public-water-supplier-document-search-information' target='_blank' rel='noopener noreferrer'>Compliance Monitoring Schedule</a> details the monitoring requirements of the PWS for the current 9-year compliance cycle.</span>}
                    {docType.type === 'lcr' &&
                      <span>The <a href='https://www.mass.gov/service-details/public-water-supplier-document-search-information' target='_blank' rel='noopener noreferrer'>Lead and Copper Rule (LCR) Approved Sampling Sites Plan</a> lists all approved primary and alternate sampling locations for lead and copper.</span>}
                    {docType.type === 'ccr' &&
                      <span>The <a href='https://www.mass.gov/service-details/public-water-supplier-document-search-information' target='_blank' rel='noopener noreferrer'>Consumer Confidence Report</a> provides information on how your system complies with the drinking water contaminant monitoring requirements during the reporting year.</span>}
                    {docType.type === 'wqr' &&
                      <span>The <a href='https://www.mass.gov/service-details/public-water-supplier-document-search-information' target='_blank' rel='noopener noreferrer'>Water Quality Report for Non-Community Systems</a> provides information on how your system complies with the drinking water contaminant monitoring requirements during the reporting year.</span>}
                    {docType.type === 'cert' &&
                      <span>The <a href='https://www.mass.gov/service-details/public-water-supplier-document-search-information' target='_blank' rel='noopener noreferrer'>Certificate of Registration</a> indicates that the system is registered with the state of Massachusetts and must comply with 310 CMR 22.00.</span>}
                    {docType.type === 'sli' &&
                      <span>The <a href='https://www.mass.gov/service-details/public-water-supplier-document-search-information'>Service Line Inventory</a> is a comprehensive inventory of all service lines within the PWS&apos; distribution system.</span>}
                  </p>
                  <section className='ma__form-downloads__section'>
                    <h4>Available Downloads:</h4>
                    <ul className='ma__form-downloads__downloads-list'>
                      {docType.files.map((file, idx) =>
                        <li key={docType.type + file.year + idx} className='ma__download-item'>
                          <a className='ma__download-item__file-link' href={file.url} target='_blank' rel='noopener noreferrer'>
                            {file.year}
                          </a>
                        </li>
                      )}
                    </ul>
                  </section>
                </li>
                )
              : null
          ))}
        </ul>
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
