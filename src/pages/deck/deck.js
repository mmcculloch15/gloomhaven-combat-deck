import React from 'react'
import Link from '../../components/Link'
import { Flex, Heading, Grid, Checkbox } from '@chakra-ui/core'
import CombatCard from '../../components/CombatCard'

const ActiveDeckPage = ({ activeDeck, setActiveDeck }) => {
	const handlePerkChange = e => {
		console.log('hi')
	}

	return (
		<Flex direction="column" p="0.5rem">
			<Heading as="h1" fontSize="xl" mb="2rem">
				{activeDeck.name}
			</Heading>
			<Flex direction="column" mb="1rem">
				<Checkbox size="lg" onChange={e => handlePerkChange(e)}>
					My perk
				</Checkbox>
			</Flex>
			<Grid templateColumns="1fr 1fr" gap="1rem" width={['100%', '100%', '30%']}>
				{activeDeck.cards.map(card => (
					<CombatCard type={card.type} count={card.count} image={card.image} />
				))}
			</Grid>
			<Link to="/home">Go home</Link>
		</Flex>
	)
}

export default ActiveDeckPage
