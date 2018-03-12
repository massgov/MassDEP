/** src/components/SearchForm.js */

import React from 'react';
import SelectBox from './SelectBox';
import Button from './Button';
import PropTypes from 'prop-types';

/** Container component for form */
class SearchForm extends React.Component {
    render() {
        return (
            <section>
                <form className="ma__form-page" name={this.props.formName} role={'search'}>
                    <fieldset>
                        <SelectBox
                            labelText={'Select a PWS by ID #'}
                            name={'pws-id'}
                            selectedOption={this.props.selectedPws}
                            options={this.props.pwsOptions}
                            sortOptionsBy={'id'}
                            controlFunc={this.props.handlePwsSelectFunc}
                        />
                    </fieldset>
                    <fieldset>
                        <SelectBox
                            labelText={'Select a PWS by Name'}
                            name={'pws-name'}
                            selectedOption={this.props.selectedPws}
                            options={this.props.pwsOptions}
                            sortOptionsBy={'name'}
                            controlFunc={this.props.handlePwsSelectFunc}
                        />
                    </fieldset>
                    <fieldset>
                        <Button
                            ariaLabel={'Retrieve Documents'}
                            text={'Retrieve Documents'}
                            handleFunc={this.props.handleButtonFunc}
                        />
                    </fieldset>
                </form>
            </section>
        );
    }
}

SearchForm.propTypes = {
    formName: PropTypes.string.isRequired,
    pwsOptions: PropTypes.array.isRequired,
    selectedPws: PropTypes.object.isRequired,
    handlePwsSelectFunc: PropTypes.func.isRequired,
    handleButtonFunc: PropTypes.func.isRequired
};

export default SearchForm;
