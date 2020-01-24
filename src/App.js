import React, { useState } from 'react'
import CharacterSelectionPage from 'pages/character-selection'
import StartNewCharacterPage from 'pages/start-new-character'
import ActiveDeckPage from 'pages/deck/'
import HomePage from 'pages/home/home'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from 'theme'
import BASE_COMBAT_DECK from 'data/base-combat-deck.data'
import PERKS from 'data/perks.data'
import PageContainer from 'components/PageContainer'
import 'App.css'
import ActiveDeckProvider from 'providers/ActiveDeckProvider'

const App = () => {
  const [activeDeck, setDeck] = useState({
    name: 'Lance Tanzarian',
    class: 'cragheart',
    cards: BASE_COMBAT_DECK,
    perks: PERKS.cragheart,
  })

  // app will need to load in saved characters somehow, but let's assume they are here now
  const [savedCharacters] = useState([
    {
      name: 'Lance Tanzarian',
      class: 'cragheart',
      cards: BASE_COMBAT_DECK,
    },
    {
      name: 'Daria Fendergraf',
      class: 'brute',
      cards: BASE_COMBAT_DECK,
    },
  ])

  const setActiveDeck = deck => {
    setDeck({ ...deck })
  }

  return (
    <ThemeProvider theme={customTheme}>
      <ActiveDeckProvider value={{ activeDeck, setActiveDeck }}>
        <CSSReset />
        <PageContainer>
          <Router>
            <Switch>
              <Route
                path="/character-selection/:class"
                render={routeProps => <StartNewCharacterPage {...routeProps} />}
              />
              <Route path="/character-selection" render={routeProps => <CharacterSelectionPage {...routeProps} />} />
              <Route path="/deck/:deckId" component={ActiveDeckPage} />
              <Route path="/" render={routeProps => <HomePage {...routeProps} savedCharacters={savedCharacters} />} />
            </Switch>
          </Router>
        </PageContainer>
      </ActiveDeckProvider>
    </ThemeProvider>
  )
}

export default App
