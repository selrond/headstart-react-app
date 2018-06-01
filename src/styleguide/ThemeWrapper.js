import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'

const ThemeWrapper = props => <ThemeProvider theme={theme} {...props} />

export default ThemeWrapper
