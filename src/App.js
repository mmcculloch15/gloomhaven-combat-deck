import React, { useState } from 'react'
import './App.css'
import CharacterSelectionPage from './pages/character-selection'
import CharacterOverviewPage from './pages/character-overview'
import ActiveDeckPage from './pages/active-deck/active-deck'
import HomePage from './pages/home/home'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from './theme'

const App = () => {
	const [activeDeck, setActiveDeck] = useState({
		name: '',
		class: '',
	})

	//app will need to load in saved characters somehow, but let's assume they are here now
	const [savedCharacters] = useState([
		{
			name: 'Lance Tanzarian',
			class: 'cragheart',
		},
		{
			name: 'Daria Fendergraf',
			class: 'brute',
		},
	])

	return (
		<ThemeProvider theme={customTheme}>
			<CSSReset />
			<Router>
				<Switch>
					<Route
						path={'/character-selection/:class'}
						render={routeProps => <CharacterOverviewPage {...routeProps} setActiveDeck={setActiveDeck} />}
					/>
					<Route
						path="/character-selection"
						render={routeProps => <CharacterSelectionPage {...routeProps} setActiveDeck={setActiveDeck} />}
					/>
					<Route
						path="/deck"
						render={routeProps =>
							activeDeck === '' ? (
								<Redirect to="/" />
							) : (
								<ActiveDeckPage {...routeProps} activeDeck={activeDeck} />
							)
						}
					/>
					<Route
						path="/"
						render={routeProps => (
							<HomePage
								{...routeProps}
								activeDeck={activeDeck}
								setActiveDeck={setActiveDeck}
								savedCharacters={savedCharacters}
							/>
						)}
					/>
				</Switch>
			</Router>
		</ThemeProvider>
	)
}

export default App
