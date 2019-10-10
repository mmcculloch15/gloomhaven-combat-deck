import React from 'react'
import { Box } from '@chakra-ui/core'
import Link from '../components/Link'

const HomePage = ({ activeDeck }) => (
	<Box d="flex" h="100px" flexDirection="column" justifyContent="space-between">
		App!
		{activeDeck !== '' ? <Link to="/deck">Active Deck</Link> : null}
		<Link to="/characters">Characters</Link>
	</Box>
)

export default HomePage
