import React from 'react'
import PropTypes from 'prop-types'
import DefaultTemplate from 'components/templates/Default'
import Header from './Header'
import Sidebar from './Sidebar'

const Default = ({ children }) => (
	<DefaultTemplate
		Header={<Header />}
		Body={children}
		Sidebar={<Sidebar />}
	/>
)

Default.propTypes = {
	children: PropTypes.node,
}

export default Default
