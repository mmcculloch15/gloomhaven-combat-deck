import React from 'react'
import characters from 'data/characters.data'
import { Flex } from '@chakra-ui/core'
import ClassCard from './ClassCard'

const CharacterSelection = ({ match }) => (
	<>
		<h1>Select your character</h1>
		<Flex direction="column" p="0.5rem">
			{characters.map(character => (
				<ClassCard character={character} match={match} />
			))}
		</Flex>
	</>
)

export default CharacterSelection
