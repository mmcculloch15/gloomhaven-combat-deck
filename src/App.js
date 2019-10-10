import React, { useState } from 'react'
import './App.css'
import CharacterSelectionPage from './pages/character-selection'
import CharacterOverviewPage from './pages/character-overview'
import ActiveDeckPage from './pages/active-deck'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

const App = () => {
	const [activeDeck, setActiveDeck] = useState('')

	return (
		<Router>
			<Switch>
				<Route
					path={'/characters/:class'}
					render={routeProps => (
						<CharacterOverviewPage {...routeProps} setActiveDeck={setActiveDeck} />
					)}
				/>
				<Route
					path="/characters"
					render={routeProps => (
						<CharacterSelectionPage {...routeProps} setActiveDeck={setActiveDeck} />
					)}
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
				<Route path="/" render={() => <div>Home page!</div>} />
			</Switch>
		</Router>
	)
}

export default App
