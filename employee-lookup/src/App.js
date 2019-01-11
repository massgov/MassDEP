import React, { Component } from 'react';
import { ColoredHeading } from '@massds/mayflower-react';
import { InputTextTypeAhead } from '@massds/mayflower-react';
import { SelectBox } from '@massds/mayflower-react';
import { ListingTable } from '@massds/mayflower-react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directory: [],
      options: [],
      tbl_results: [],
      filters: {
        location: {
          text: "",
          value: ""
        },
        selection: {
          text: "",
          value: ""
        }
      },
      filterOptions: [
        {text:"All Locations", value:"ALL"},
        {text:"Boston/HQ", value:"HQ"},
        {text:"Western Regional Office", value:"WERO"},
        {text:"Central Regional Office", value:"CERO"},
        {text:"Northeast Regional Office", value:"NERO"},
        {text:"Southeast Regional Office", value:"SERO"},
        {text:"Wall Experiment Station", value:"WES"}
      ]
    };
    this.handleInputTextTypeAheadOnChange = this.handleInputTextTypeAheadOnChange.bind(this);
    this.handleSelectBoxChange = this.handleSelectBoxChange.bind(this);
  }

  configureTypeAheadComponent(){
    let options = this.state.directory;
    let filters = this.state.filters;
    let opts = [];
    options.forEach(function(item){
      if (filters.location.value === "" || filters.location.value === "ALL") {
        opts.push({text:item.fname + " " + item.lname, value:item.id});
      } else {
        if (item.location === filters.location.value) {
          opts.push({text:item.fname + " " + item.lname, value:item.id});
        }
      }
    });
    this.setState({options: opts})
  }

  componentDidMount () {
    let that = this;
    if(process.env.NODE_ENV === 'production'){
      fetch('https://api.github.com/repos/massgov/MassDEP/contents/employee-lookup/public/data/directory.json', {
        headers: {
          "Accept": "application/vnd.github.v3.raw"
        },
        method: "GET"
      }).then((response) =>
        response.json()
      ).then(function (json) {
        that.setState({directory: json});
        that.configureTypeAheadComponent();
      });
    }else if(process.env.NODE_ENV === 'development'){
      fetch('./data/directory.json').then((response) =>
        response.json()
      ).then(function (json) {
        that.setState({directory: json});
        that.configureTypeAheadComponent();
      });
    }
  }

  handleInputTextTypeAheadOnChange(e, selection) {
    let that = this;
    let options = this.state.directory;
    let displayItems = [];
    let filters = this.state.filters;
    filters.selection.text = "";
    filters.selection.value = "";
    options.forEach(function (item) {
      if (item.id === selection.suggestion.value) {
        filters.selection.text = item.fname + " " + item.lname;
        filters.selection.value = item.id;
        that.setState({filters: filters});
        displayItems.push(item);
      }
    });
    this.formatForTableDisplay(displayItems);
  }

  handleSelectBoxChange(e) {
    let filters= this.state.filters;
    filters.location.text = e.selected;
    filters.location.value = e.selectedValue;
    filters.selection.text = "";
    filters.selection.value = "";
    this.setState({filters: filters});
    this.configureTypeAheadComponent();
  }

  static getTableRow() {
    return {label: null, items: []};
  }

  static formatPhoneNumber(strPhone) {
    return strPhone ? "(" + strPhone.slice(0,3) + ") " + strPhone.slice(3,6) + "-" + strPhone.slice(6) : "";
  }

  getLocationText(value) {
    let locations = this.state.filterOptions;
    for (let i=0; i<locations.length; i++) {
      if (locations[i].value === value) {
        return locations[i].text;
      }
    }
  }

  formatForTableDisplay(items) {
    let that = this;
    let data = [];
    items.forEach(function(item){
      let rowOne = App.getTableRow();
      rowOne.label = "Name: ";
      rowOne.items.push(item.fname + " " + item.lname);

      let rowTwo = App.getTableRow();
      rowTwo.label = "Location: ";
      let locationText = that.getLocationText(item.location);
      rowTwo.items.push(locationText);

      let rowThree = App.getTableRow();
      rowThree.label = "Phone 1: ";
      rowThree.items.push(App.formatPhoneNumber(item.phone1));

      let rowFour = App.getTableRow();
      rowFour.label = "Phone 2: ";
      rowFour.items.push(App.formatPhoneNumber(item.phone2));

      let rowFive = App.getTableRow();
      rowFive.label = "Email: ";
      rowFive.items.push(item.email);

      data.push(rowOne, rowTwo, rowThree, rowFour, rowFive);
    });
    this.setState({tbl_results: data});
  }

  render() {
    return (
      <section className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ColoredHeading
              text="MassDEP Employee Directory"
              color="blue"
            />
          </div>
        </div>
        <div className="row">
              <div className="col-12">
                <div id="input-select-box">
                  <SelectBox
                    label=""
                    stackLabel={false}
                    id="select-location"
                    selected={this.state.filters.location.text}
                    options={this.state.filterOptions}
                    onChangeCallback={this.handleSelectBoxChange}
                  />
                </div>
              </div>
              <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5">
                <div id="input-text-type-ahead">
                  <InputTextTypeAhead
                    label=""
                    placeholder="Employee Name"
                    id="employee-typeahead"
                    selected={this.state.filters.selection.text}
                    options={this.state.options}
                    onChange={this.handleInputTextTypeAheadOnChange}
                  />
                </div>
              </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div id="results-listing-table">
              <ListingTable
                rows={this.state.tbl_results}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
