import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useResultContext } from '../context/ResultContextProvider'
import { Footer } from './Footer'
import { Home } from './Home'
import { Navbar } from './Navbar'
import { Results } from './Results'

export const Routes = () => {
  const { darkTheme, setDarkTheme } = useResultContext()
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path={['/search', '/images', '/news', '/videos']}>
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Results />
        {/* <Footer /> */}
      </Route>
    </Switch>
  )
}
