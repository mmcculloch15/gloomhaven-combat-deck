import React from 'react'
import characters from '../data/characters.data'
import Link from '../components/Link'
import { Flex } from '@chakra-ui/core'

const CharacterOverviewPage = ({ match, setActiveDeck }) => {
	const character = characters.find(character => character.class === match.params.class)

	return (
		<Flex direction="column" h="90vh" border="1px solid red">
			<h1>{character.displayName}</h1>
			<ul>
				{character.perks.map(perk => (
					<li>{perk.name}</li>
				))}
			</ul>
			<Link to="/deck" onClick={() => setActiveDeck(character.class)}>
				Start new deck
			</Link>
		</Flex>
	)
}

export default CharacterOverviewPage
