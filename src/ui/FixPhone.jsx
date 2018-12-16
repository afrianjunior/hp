import React from 'react'
import PropTypes from 'prop-types'
import Container from 'muicss/lib/react/container'
import styled from 'styled-components'

const MarginUp = styled.div`
  padding-top: 20px;
`

function Layout ({ children }) {
  return (
    <Container>
      <MarginUp>
        { children }
      </MarginUp>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
