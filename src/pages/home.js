import React from 'react'
import { Flex } from '@chakra-ui/core'
import Link from '../components/Link'

const HomePage = ({ activeDeck }) => (
	<Flex direction="column" justify="space-between" h="100px">
		App!
		{activeDeck !== '' ? <Link to="/deck">Active Deck</Link> : null}
		<Link to="/characters">Characters</Link>
	</Flex>
)

export default HomePage
