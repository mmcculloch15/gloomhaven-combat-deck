import React from 'react'
import Link from '../../components/Link'
import { Flex, Heading, Grid } from '@chakra-ui/core'
import CombatCard from '../../components/CombatCard'

const ActiveDeckPage = ({ activeDeck }) => (
	<Flex direction="column" p="0.5rem">
		<Heading as="h1" fontSize="xl" mb="2rem">
			{activeDeck.name}
		</Heading>
		<Grid templateColumns="1fr 1fr" gap="1rem" width={['100%', '100%', '30%']}>
			{activeDeck.cards.map(card => (
				<CombatCard type={card.type} count={card.count} image={card.image} />
			))}
		</Grid>
		<Link to="/home">Go home</Link>
	</Flex>
)

export default ActiveDeckPage
