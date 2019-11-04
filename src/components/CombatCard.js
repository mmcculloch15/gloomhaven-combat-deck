import React from 'react'
import { Flex, Badge } from '@chakra-ui/core'

//Maybe use the `copy` icon here instead, with a number on it? Might just look nicer, and takes up less space than a badgeo

const CombatCard = ({ type, count }) => (
	<Flex direction="column" w="100%" h="100px" border="1px solid black" borderRadius="8px">
		{count > 1 ? (
			<Badge
				variant="solid"
				variantColor="green"
				ml="60%"
				mt="70px"
				width="80px"
				height="20px"
				textAlign="center"
				border="1px 0px 1px 1px solid black"
				alignSelf="flex-end"
			>
				{count} copies
			</Badge>
		) : null}
	</Flex>
)

export default CombatCard
