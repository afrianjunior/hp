import Api from 'api'
import {
  FETCHING_PLANET,
  RECEIVE_PLANET_SUCCESS,
  FETCH_PLANET_GET_ERROR
} from './types'

export const fetchPlanets = () => ({
  type: FETCHING_PLANET,
  status: 'fetching'
})

export const receivePlanets = planets => ({
  type: RECEIVE_PLANET_SUCCESS,
  payload: planets,
  status: 'fetched'
})

export const fetchPlanetsError = error => ({
  type: FETCH_PLANET_GET_ERROR,
  message: error,
  status: 'error'
})

export const getPlanet = (id) => dispatch => {
  dispatch(fetchPlanets())
  return Api.get(`planets/${id}`)
    .then(res => res.data)
    .then(res => {
      console.log(res)
      // dispatch(receivePlanets(data))
    })
    .catch(err => {
      dispatch(fetchPlanetsError(err.message))
    })
}
