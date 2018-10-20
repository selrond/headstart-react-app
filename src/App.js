import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from 'theme'
import Home from 'routes/Home'
import NotFound from 'routes/NotFound'

const AppStyles = createGlobalStyle`
  ${({ theme: { globalStyles } }) => globalStyles}
`

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <AppStyles />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  </ThemeProvider>
)

export default App
