import React from 'react'
import characters from '../../data/characters.data'
import Perk from './Perk'
import { Flex, Icon, Heading } from '@chakra-ui/core'
import { capitalize } from '../../utils/helpers'
import CTA from '../../components/CTA'

const CharacterOverviewPage = ({ match, setActiveDeck }) => {
	const character = characters.find(character => character.class === match.params.class)

	return (
		<Flex direction="column" w="90vw" margin="0 auto">
			<Flex marginBottom="2rem">
				<Icon name={character.class} size="32px" marginRight="0.5rem" />
				<Heading as="h1">{capitalize(character.class)}</Heading>
			</Flex>
			<Heading as="h2" fontSize="xl" marginBottom="0.5rem">
				Perks
			</Heading>
			{character.perks.map((perk, i) => (
				<Perk count={perk.count} name={perk.name} key={`perk${i}`} />
			))}
			<CTA
				to="/deck"
				onClick={() => setActiveDeck({ name: 'Test name', class: character.class })}
				marginTop="3rem"
			>
				Start new deck
			</CTA>
		</Flex>
	)
}

export default CharacterOverviewPage
