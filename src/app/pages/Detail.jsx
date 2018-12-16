import React, { Component } from 'react'
import qs from 'query-string'
import Button from 'muicss/lib/react/button'

class Detail extends Component {
  state = {
    query: {}
  }
  componentDidMount () {
    const queries = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
    if (!queries.hp) this.props.history.push('/')
    if (!queries.problem) this.props.history.push('/')
    this.setState(({ query }) => ({
      query: queries
    }))
  }

  handleToAdress () {
    this.props.history.push(`/address`)
  }

  render () {
    return (
      <React.Fragment>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <img style={{
            width: '60px'
          }} src="https://res.cloudinary.com/klikfixcloud/image/upload/v1/icon/mati-total-issue.svg"/>
          <div className="mui--text-headline" style={{
            marginLeft: '15px'
          }}>
            {this.state.query.hp} kerusakan {this.state.query.problem}
          </div>
        </div>
        <div
          style={{
            marginTop: '40px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ecf0f1'
          }}>
          <p>
            Layanan perbaikan "{this.state.query.problem}" meliputi:
          </p>
          <ul>
            <li>
              Kerusakan penghubung atau connector
            </li>
            <li>
              Kerusakan internal perangkat
            </li>
            <li>
              Gangguan IC power
            </li>
            <li>
              Gangguan IC USB atau IC Charging
            </li>
            <li>
              Kerusakan pada emmc
            </li>
          </ul>
        </div>

        <div
          style={{
            marginTop: '20px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px dotted #ecf0f1',
            backgroundColor: '#f6f6f6'
          }}>
          Anda tidak perlu membayar apapun sebelum kami menyelesaikan pekerjaan!
        </div>
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '0 10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#fff',
            boxShadow: '0px -2px 10px 0px rgba(0,0,0,0.1)'
          }}>
          <div>
            <div style={{
              fontSize: '11px',
              color: '#bdc3c7'
            }}>
              BIAYA MULAI DARI
            </div>
            <div className="mui--text-headline" style={{
              color: '#2ecc71'
            }}>Rp 200.000</div>
          </div>
          <div
            style={{
              width: '150px'
            }}>
            <Button size="large" variant="raised" color="primary" style={{
              width: '100%',
              backgroundColor: '#A852B5',
              textAlign: 'center'
            }} onClick={this.handleToAdress.bind(this)}>Perbaiki</Button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Detail
