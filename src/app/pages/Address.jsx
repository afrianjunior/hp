import React, { Component } from 'react'
import Button from 'muicss/lib/react/button'
import Input from 'muicss/lib/react/input'

class Address extends Component {
  state = {
    addressText: ''
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.history.push(`/thanks`)
  }

  handleListenAddress () {
    const { address } = this.refs.som
    this.setState(({ addressText }) => ({
      addressText: address.value
    }))
  }

  render () {
    return (
      <React.Fragment>
        <div className="mui--text-headline">Masukan alamat kamu</div>
        <form
          ref="som"
          onSubmit={this.handleSubmit.bind(this)}
          style={{
            marginTop: '20px'
          }}>
          <Input onChange={this.handleListenAddress.bind(this)} name="address" label="Alamat" placeholder="Alamat kamu" />
          <div
            style={{
              textAlign: 'center',
              position: 'fixed',
              bottom: 0,
              right: 0,
              left: 0,
              padding: '0 10px'
            }}>
            <Button size="large" variant="raised" color="primary" style={{
              width: '100%',
              backgroundColor: '#A852B5'
            }}
            disabled={
              this.state.addressText.length < 5
            }>Perbaiki Sekarang</Button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default Address
