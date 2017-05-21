import React, { Component } from 'react'
import dynamic from 'next/dynamic'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { dynamicComponent: null }
  }

  loadDynamicComponent = (event) => {
    const componentName = event.target.dataset.component;
    const DynamicComponent = dynamic(import(`../components/${componentName}`))
    this.setState({ dynamicComponent: <DynamicComponent />  })
  }

  render() {
    const { dynamicComponent } = this.state

    return (
      <div>
        <button
          onClick={this.loadDynamicComponent}
          data-component='dynamic'
        >
          load dynamic component
        </button>

        {dynamicComponent}
      </div>
    )
  }
}
