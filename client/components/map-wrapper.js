import React, {Component} from 'react'
import D3Map from './maps/D3Map'

export default class MapWrapper extends Component {
  componentDidMount() {
    const map = new D3Map(this.refs.map)
  }

  render() {
    return <div ref="map" />
  }
}

//should be class
