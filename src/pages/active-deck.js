import React from 'react'
import Link from '../components/Link'
import { Box } from '@chakra-ui/core'

const ActiveDeckPage = ({ activeDeck }) => (
	<Box h="90vh" border="1px solid blue">
		<h1>New deck: {activeDeck}</h1>

		<Link to="/home">Go home</Link>
	</Box>
)

export default ActiveDeckPage
