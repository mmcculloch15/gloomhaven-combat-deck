import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/core'

//? Could we use the same component to track actual perk checkmarks?
const Perk = ({ count, name, isDisplay }) => (
	<Flex mb="0.5rem">
		{[...Array(count)].map((e, i) => (
			<Box h="24px" w="24px" border="1px dashed black" mr="0.5rem" key={`${name}-${i}`}></Box>
		))}
		<Text>{name}</Text>
	</Flex>
)

export default Perk
