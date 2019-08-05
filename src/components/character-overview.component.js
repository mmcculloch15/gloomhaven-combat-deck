import React from 'react'
import styled from 'styled-components'
import characters from '../data/characters.data'
import { PrimaryLink } from '../elements/links'

const CharacterOverviewWrapper = styled.section`
	border: 1px solid red;
	height: 90vh;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`

const CharacterOverview = ({ match, setActiveDeck }) => {
	const character = characters.find(character => character.class === match.params.class)
	console.log(character)

	return (
		<CharacterOverviewWrapper>
			<h1>{character.displayName}</h1>
			<ul>
				{character.rules.map(rule => (
					<li>{rule.name}</li>
				))}
			</ul>
			<PrimaryLink to="/deck" onClick={() => setActiveDeck(character.class)}>
				Start new deck
			</PrimaryLink>
		</CharacterOverviewWrapper>
	)
}

export default CharacterOverview
