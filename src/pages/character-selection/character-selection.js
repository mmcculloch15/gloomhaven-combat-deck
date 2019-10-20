import React from 'react'
import characters from '../../data/characters.data'
import Link from '../../components/Link'
import { Flex, Icon } from '@chakra-ui/core'
import ClassCard from './ClassCard'

const CharacterSelection = ({ match }) => (
	<>
		<h1>Select your character</h1>
		<Flex direction="column" w="90vw" margin="0 auto">
			{characters.map(character => (
				<ClassCard character={character} match={match} />
			))}
		</Flex>
	</>
)

export default CharacterSelection
