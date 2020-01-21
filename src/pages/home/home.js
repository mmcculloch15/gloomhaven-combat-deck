import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/core'
import CTA from 'components/CTA'
import CharacterGroup from './CharacterGroup'

//TODO: Style state where savedCharacters == 0

const HomePage = ({ activeDeck, setActiveDeck, savedCharacters }) => (
	<Flex direction="column" justify="space-between" p="0.5rem">
		<Heading as="h1" mb="3rem">
			Combat deck
		</Heading>
		{savedCharacters.length > 0 ? (
			<CharacterGroup savedCharacters={savedCharacters} setActiveDeck={setActiveDeck} />
		) : (
			<Text fontSize="md">Create your first character!</Text>
		)}
		<CTA to="/character-selection">Create new character</CTA>
	</Flex>
)

export default HomePage
