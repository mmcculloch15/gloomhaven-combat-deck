import React, { useState } from 'react'
import characters from '../../data/characters.data'
import Perk from './Perk'
import { Flex, Icon, Heading, Input, Text } from '@chakra-ui/core'
import { capitalize } from '../../utils/helpers'
import CTA from '../../components/CTA'

const CharacterOverviewPage = ({ match, setActiveDeck }) => {
	const [deckName, setDeckName] = useState('')
	const handleChange = event => setDeckName(event.target.value)
	const character = characters.find(character => character.class === match.params.class)

	return (
		<Flex direction="column" p="0.5rem">
			<Flex mb="2rem">
				<Icon name={character.class} size="3rem" mr="1rem" />
				<Heading as="h1" fontSize="40px">
					{capitalize(character.class)}
				</Heading>
			</Flex>
			<Text as="label" fontSize="xl" fontWeight="bold" mb="0.25rem">
				Character Name
			</Text>
			<Input variant="outline" value={deckName} onChange={handleChange} mb="1rem" />
			<Heading as="h2" fontSize="xl" mb="0.5rem">
				Perks
			</Heading>
			{character.perks.map((perk, i) => (
				<Perk count={perk.count} name={perk.name} key={`perk${i}`} />
			))}
			<CTA to="/deck" onClick={() => setActiveDeck({ name: deckName, class: character.class })} mt="3rem">
				Start new deck
			</CTA>
		</Flex>
	)
}

export default CharacterOverviewPage
