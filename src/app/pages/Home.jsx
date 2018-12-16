import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPlanets } from '../../actions/planetsActions'
import { Link } from 'react-router-dom'
import Option from 'muicss/lib/react/option'
import Select from 'muicss/lib/react/select'
import Button from 'muicss/lib/react/button'

class Home extends Component {
  state = {
    selectHp: 'Pilih Gadget',
    selectProblem: 'Pilih Kerusakan',
    hp: [
      {
        name: 'Pilih Gadget',
        value: null
      },
      {
        name: 'Samsung S9+',
        value: 'Samsung S9+'
      },
      {
        name: 'iPhone XS Max',
        value: 'iPhone XS Max'
      },
      {
        name: 'Xiaomi 4x',
        value: 'Xiaomi 4x'
      }
    ],
    problem: [
      {
        name: 'Pilih Kerusakan',
        value: null
      },
      {
        name: 'Sinyal',
        value: 'Sinyal'
      },
      {
        name: 'Mati Total',
        value: 'Mati Total'
      },
      {
        name: 'Batrei',
        value: 'Batrei'
      },
      {
        name: 'Layar',
        value: 'Layar'
      }
    ]
  }

  handleRenderSelectHandPhone () {
    const { hp } = this.state
    return (
      hp.map((i, key) => (
        <Option value={i.value} label={i.name} key={key} />
      ))
    )
  }

  handleRenderSelectProblem () {
    const { problem } = this.state
    return (
      problem.map((i, key) => (
        <Option value={i.value} label={i.name} key={key} />
      ))
    )
  }

  handleSubmit (e) {
    e.preventDefault()
    const { hp, problem } = this.refs.gadget
    this.props.history.push(`/detail?hp=${hp.value}&problem=${problem.value}`)
  }

  handleSelectHandphone () {
    const { hp } = this.refs.gadget
    this.setState(({ selectHp, selectProblem }) => ({
      selectHp: hp.value
    }))
  }

  handleSelectProblem (e, val) {
    const { problem } = this.refs.gadget
    this.setState(({ selectProblem }) => ({
      selectProblem: problem.value
    }))
  }

  render () {
    return (
      <React.Fragment>
        <div className="mui--text-headline">Periksa segera gadget kamu</div>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          ref="gadget"
          style={{
            marginTop: '20px'
          }}>
          <Select onChange={this.handleSelectHandphone.bind(this)} name="hp" label="Jenis Gadget" defaultValue={this.state.hp[0].value}>
            {this.handleRenderSelectHandPhone()}
          </Select>
          <Select
            disabled={this.state.selectHp === null} onChange={this.handleSelectProblem.bind(this)} name="problem" label="Kerusakannya" defaultValue={this.state.problem[0].value}>
            {this.handleRenderSelectProblem()}
          </Select>
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
              this.state.selectHp === 'Pilih Gadget' || this.state.selectProblem === 'Pilih Kerusakan'
            }>Perbaiki Sekarang</Button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ planetsReducer }) => ({
  planet: planetsReducer.planet,
  status: planetsReducer.status,
  error: planetsReducer.error
})

const mapDispatchToProps = { getPlanets }

Home.propTypes = {
  planet: PropTypes.object,
  status: PropTypes.string,
  error: PropTypes.string,
  getPlanets: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
