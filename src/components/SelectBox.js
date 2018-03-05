/** src/components/SelectBox.js */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component based on Mayflower atoms::forms::select box
 * https://mayflower.digital.mass.gov/?p=atoms-select-box
 */
class SelectBox extends React.Component {
    render() {
        let listOptions = this.props.options;
        let sortedOptions = listOptions.sort((a, b) => a[this.props.sortOptionsBy].localeCompare(b[this.props.sortOptionsBy]));

        return (
           <section className="ma__select-box js-dropdown">
               <label htmlFor="color-select" className="ma__select-box__label">
                   {this.props.labelText}
               </label>
               <div className="ma__select-box__field">
                   <select
                       name={this.props.name}
                       value={this.props.selectedOption.id}
                       onChange={this.props.controlFunc}
                       className="ma__select-box__select js-dropdown-select ">
                       {sortedOptions.map(opt => {
                           return (
                               <option key={opt.id} value={opt.id}>{opt[this.props.sortOptionsBy]}</option>
                           );
                       })}
                   </select>
                   <div className="ma__select-box__link">
                       <span className="js-dropdown-link">{this.props.selectedOption[this.props.sortOptionsBy]}</span>
                       <span className="ma__select-box__icon"></span>
                   </div>
               </div>
           </section>
        );
    }
}

SelectBox.propTypes = {
    labelText: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    selectedOption: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    sortOptionsBy: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired
};

export default SelectBox;