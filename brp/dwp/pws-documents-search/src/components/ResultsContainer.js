/** src/components/ResultsContainer.js */

import React from 'react';
import ResultsHeading from './ResultsHeading';
import FormDownloadsAsListing from './FormDownloadsAsListing';
import PwsInfo from './PwsInfo';
import PropTypes from 'prop-types';

/** Container component for main content */
class ResultsContainer extends React.Component {
    render() {
        const resultsHeadingContainerStyles = {
            paddingBottom: "25px"
        };

        if(this.props.selectedPws.id === 'PWS ID #' || this.props.init === false) {
            return (
                <section>
                <h3 className="ma__comp-heading">No PWS Selected</h3>
                <p>Select a PWS using either the PWS ID # or PWS Name dropdown menu located above.</p>
                </section>
            );
        }
        return (
            <section>
                <section style={resultsHeadingContainerStyles}>
                    <ResultsHeading
                        totalRecordCount={this.props.selectedPwsData.documents.length}
                        pws={this.props.selectedPwsData.pws}
                    />
                    <PwsInfo
                        id={this.props.selectedPwsData.pws.id}
                        name={this.props.selectedPwsData.pws.name}
                        class={this.props.selectedPwsData.pws.class}
                        town={this.props.selectedPwsData.pws.town}
                        winter={this.props.selectedPwsData.pws.winter}
                        summer={this.props.selectedPwsData.pws.summer}
                        connections={this.props.selectedPwsData.pws.connections}
                        mone={this.props.selectedPwsData.pws.mone}
                        mtwo={this.props.selectedPwsData.pws.mtwo}
                        mtown={this.props.selectedPwsData.pws.mtown}
                        mstate={this.props.selectedPwsData.pws.mstate}
                        mzip={this.props.selectedPwsData.pws.mzip}
                    />
                </section>
                <section>
                    <FormDownloadsAsListing
                        selectedPws={this.props.selectedPws}
                        documents={this.props.selectedPwsData.documents}
                        fileTypeMap={this.props.fileTypeMap}
                    />
                </section>
            </section>
        );
    }
}

ResultsContainer.propTypes = {
    init: PropTypes.bool.isRequired,
    selectedPws: PropTypes.object.isRequired,
    selectedPwsData: PropTypes.object.isRequired,
    fileTypeMap: PropTypes.objectOf(PropTypes.string)
};

export default ResultsContainer;