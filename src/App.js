import React from 'react'
import './App.css'
import CharacterPage from './pages/character.page'
import DeckModificationPage from './pages/deck-modification.page'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.setActiveDeck = this.setActiveDeck.bind(this)
		this.state = {
			activeDeck: '',
		}
	}

	setActiveDeck(characterClass) {
		this.setState({ activeDeck: characterClass })
	}
	render() {
		return (
			<Router>
				<Switch>
					<Route
						path="/characters"
						render={routeProps => <CharacterPage {...routeProps} setActiveDeck={this.setActiveDeck} />}
					/>
					<Route
						path="/deck"
						render={routeProps =>
							this.state.activeDeck === '' ? (
								<Redirect to="/" />
							) : (
								<DeckModificationPage {...routeProps} activeDeck={this.state.activeDeck} />
							)
						}
					/>
					<Route path="/" render={() => <div>Home page!</div>} />
				</Switch>
			</Router>
		)
	}
}

export default App
