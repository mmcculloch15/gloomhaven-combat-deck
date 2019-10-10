import React from 'react'
import styled from 'styled-components'
import characters from '../data/characters.data'
import { PrimaryLink } from '../elements/links'

const StyledCharacterOverview = styled.section`
	border: 1px solid red;
	height: 90vh;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`

const CharacterOverviewPage = ({ match, setActiveDeck }) => {
	const character = characters.find(character => character.class === match.params.class)

	return (
		<StyledCharacterOverview>
			<h1>{character.displayName}</h1>
			<ul>
				{character.perks.map(perk => (
					<li>{perk.name}</li>
				))}
			</ul>
			<PrimaryLink to="/deck" onClick={() => setActiveDeck(character.class)}>
				Start new deck
			</PrimaryLink>
		</StyledCharacterOverview>
	)
}

export default CharacterOverviewPage
