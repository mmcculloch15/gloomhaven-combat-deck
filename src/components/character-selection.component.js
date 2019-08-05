import React from 'react'
import styled from 'styled-components'
import characters from '../data/characters.data'
import { CharacterSelectionLink } from '../elements/links'

const CharacterSelectionWrapper = styled.section`
	border: 1px solid red;
	height: 90vh;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`

const CharacterSelection = ({ match }) => (
	<CharacterSelectionWrapper>
		<h1>Select your character</h1>
		{characters.map(character => (
			<CharacterSelectionLink key={character.class} to={`${match.path}/${character.class}`}>
				{character.displayName}
			</CharacterSelectionLink>
		))}
	</CharacterSelectionWrapper>
)

export default CharacterSelection
