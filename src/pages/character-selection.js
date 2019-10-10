import React from 'react'
import characters from '../data/characters.data'
import Link from '../components/Link'
import { Box } from '@chakra-ui/core'

const CharacterSelection = ({ match }) => (
	<Box d="flex" flexDirection="column" h="90vh" border="1px solid red">
		<h1>Select your character</h1>
		{characters.map(character => (
			<Link to={`${match.path}/${character.class}`}>{character.displayName}</Link>
		))}
	</Box>
)

export default CharacterSelection
