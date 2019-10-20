import React from 'react'
import Link from '../../components/Link'
import { Flex } from '@chakra-ui/core'

const ActiveDeckPage = ({ activeDeck }) => (
	<Flex direction="column" p="0.5rem">
		<h1>
			New deck: {activeDeck.name} -- {activeDeck.class}
		</h1>

		<Link to="/home">Go home</Link>
	</Flex>
)

export default ActiveDeckPage
