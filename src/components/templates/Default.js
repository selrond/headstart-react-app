import React from 'react'
import PropTypes from 'prop-types'

const Default = ({ Header, Body, Sidebar }) => (
  <React.Fragment>
    {Header}
    {Body}
    {Sidebar}
  </React.Fragment>
)

Default.propTypes = {
  Header: PropTypes.node.isRequired,
  Body: PropTypes.node.isRequired,
  Sidebar: PropTypes.node.isRequired,
}

export default Default
