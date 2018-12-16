import React, { Component } from 'react'
import Appbar from 'muicss/lib/react/appbar'
import styled from 'styled-components'

const NavBar = styled.div`
  display: flex;
  height: 100%;
`

class Layout extends Component {
  handleUpdateLoc () {
    this.setState(({ log }) => ({
      log: window.location.pathname
    }))
  }

  handleBack (e) {
    if (window.location.pathname !== '/') window.location = '/'
  }

  visibleBackButton () {
    console.log(window.location)
    return (window.location.pathname === '/') ? {
      visibility: 'hidden'
    } : {
      cursor: 'pointer'
    }
  }

  render () {
    return (
      <Appbar
        style={{
          backgroundColor: '#A852B5'
        }}>
        <table
          width="100%"
          style={{
            padding: '0 10px'
          }}>
          <tbody>
            <tr style={{
              verticalAlign: 'middle'
            }}>
              <td className="mui--appbar-height">
                <div
                  style={this.visibleBackButton()} onClick={this.handleBack.bind(this)}>
                  Back
                </div>
              </td>
              <td className="mui--appbar-height" style={{ textAlign: 'center', fontWeight: 'bold' }}>Service Handphone</td>
              <td className="mui--appbar-height" style={{
                visibility: 'hidden',
                textAlign: 'right'
              }}>Back</td>
            </tr>
          </tbody>
        </table>
      </Appbar>
    )
  }
}

export default Layout
