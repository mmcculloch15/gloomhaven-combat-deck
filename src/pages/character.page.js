import React from 'react'
import { Route } from 'react-router-dom'
import CharacterSelection from '../components/character-selection.component'
import CharacterOverview from '../components/character-overview.component'

const CharacterPage = ({ match, setActiveDeck }) => {
	return (
		<>
			<Route exact path={`${match.path}`} component={CharacterSelection} />
			<Route
				path={`${match.path}/:class`}
				render={routeProps => <CharacterOverview {...routeProps} setActiveDeck={setActiveDeck} />}
			/>
		</>
	)
}

export default CharacterPage
