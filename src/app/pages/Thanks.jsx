import React, { Component } from 'react'
import Button from 'muicss/lib/react/button'
import Input from 'muicss/lib/react/input'

class Address extends Component {
  handleSubmit (e) {
    e.preventDefault()
    this.props.history.push(`/`)
  }

  render () {
    return (
      <React.Fragment>
        <form
          ref="som"
          onSubmit={this.handleSubmit.bind(this)}
          style={{
            marginTop: '20px'
          }}>
          <div className="mui--text-headline" style={{
            textAlign: 'center'
          }}>Terimakasih telah memberikan kepercayaan kepada kami!</div>
          <div
            style={{
              textAlign: 'center',
              position: 'fixed',
              bottom: 0,
              right: 0,
              left: 0,
              padding: '0 10px'
            }}>
            <Button size="large" variant="flat" style={{
              width: '100%'
            }}>Kembali</Button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default Address
