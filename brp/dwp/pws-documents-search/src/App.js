/** src/App.js */

import React from 'react'
import SearchForm from './components/SearchForm'
import ResultsContainer from './components/ResultsContainer'

/**
 * Top-level component for Public Water System Document Search app.
 */
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      init: false,
      selectedPws: {
        id: 'PWS ID #',
        name: 'PWS Name'
      },
      selectedPwsData: {
        pws: {
          id: null,
          name: null,
          class: null,
          town: null,
          winter: null,
          summer: null,
          connections: null,
          mone: null,
          mtwo: null,
          mtown: null,
          mstate: null,
          mzip: null
        },
        documents: []
      },
      fileTypeMap: {},
      pwsOptions: []
    }
    this.handlePwsSelect = this.handlePwsSelect.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  componentDidMount () {
    if (process.env.NODE_ENV === 'production') {
      fetch('https://api.github.com/repos/massgov/MassDEP/contents/brp/dwp/pws-documents-search/public/data/file-type-map.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github.v3.raw'
        },
        method: 'GET'
      }).then((response) =>
        response.json()
      ).then((jsonResponse) =>
        this.setState({ fileTypeMap: jsonResponse })
      )

      fetch('https://api.github.com/repos/massgov/MassDEP/contents/brp/dwp/pws-documents-search/public/data/pws-list.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github.v3.raw'
        },
        method: 'GET'
      }).then((response) =>
        response.json()
      ).then((jsonResponse) =>
        this.setState({ pwsOptions: jsonResponse })
      )
    } else if (process.env.NODE_ENV === 'development') {
      fetch('/data/file-type-map.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }).then((response) =>
        response.json()
      ).then((jsonResponse) =>
        this.setState({ fileTypeMap: jsonResponse })
      )

      fetch('/data/pws-list.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }).then((response) =>
        response.json()
      ).then((jsonResponse) =>
        this.setState({ pwsOptions: jsonResponse })
      )
    }
  }

  handlePwsSelect (e) {
    const pws = this.state.pwsOptions.find((item) => item.id === e.target.value)
    this.setState({
      selectedPws: {
        id: e.target.value,
        name: pws.name
      }
    })
  }

  handleButtonClick (e) {
    e.preventDefault()
    const selectedPwsId = this.state.selectedPws.id

    if (process.env.NODE_ENV === 'production') {
      fetch('https://api.github.com/repos/massgov/MassDEP/contents/brp/dwp/pws-documents-search/public/data/' + selectedPwsId + '.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github.v3.raw'
        },
        method: 'GET'
      }).then((response) =>
        response.json()
      ).then((jsonResponse) =>
        this.setState({ init: true, selectedPwsData: jsonResponse })
      )
    } else if (process.env.NODE_ENV === 'development') {
      fetch('/data/' + selectedPwsId + '.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }).then((response) =>
        response.json()
      ).then((jsonResponse) =>
        this.setState({ init: true, selectedPwsData: jsonResponse })
      )
    }
  }

  render () {
    return (
      <section>
        <header>
          <h1 className='ma__colored-heading ma__colored-heading--blue'>Public Water System Document Search</h1>
        </header>
        <nav>
          <SearchForm
            formName='frmPwsDoc'
            pwsOptions={this.state.pwsOptions}
            selectedPws={this.state.selectedPws}
            onHandlePwsSelectFunc={this.handlePwsSelect}
            onHandleButtonFunc={this.handleButtonClick}
          />
        </nav>
        <main>
          <ResultsContainer
            init={this.state.init}
            selectedPws={this.state.selectedPws}
            selectedPwsData={this.state.selectedPwsData}
            fileTypeMap={this.state.fileTypeMap}
          />
        </main>
      </section>
    )
  }
}

export default App
