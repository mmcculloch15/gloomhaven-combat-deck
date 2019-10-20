import React from 'react'
import { PseudoBox, Text, Icon } from '@chakra-ui/core'
import Link from '../../components/Link'

const ClassCard = ({ match, character }) => (
	<Link to={`${match.path}/${character.class}`}>
		<PseudoBox
			display="flex"
			justifyContent="center"
			height="70px"
			border="1px solid black"
			borderRadius="8px"
			bg="#D8D8D8"
			width="100%"
			marginBottom="1rem"
			padding="1rem"
		>

			<Icon name={character.class} size="24px" marginRight="8px"/>
      <Text fontSize="lg" textAlign="center">
				{character.displayName}
			</Text>
		</PseudoBox>
	</Link>
)

export default ClassCard
