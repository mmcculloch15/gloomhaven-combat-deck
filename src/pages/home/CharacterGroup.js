import React from 'react'
import { Heading } from '@chakra-ui/core'
import CharacterCard from './CharacterCard'

const CharacterGroup = ({ savedCharacters, setActiveDeck }) => (
	<>
		<Heading as="h2" marginBottom="16px" fontSize="xl" margin="0 auto 16px auto">
			Characters
		</Heading>
		{savedCharacters.map((character, i) => (
			<CharacterCard name={character.name} characterClass={character.class} setActiveDeck={setActiveDeck} />
		))}
	</>
)

export default CharacterGroup
