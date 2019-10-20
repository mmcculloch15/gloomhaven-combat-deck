import React from 'react'
import { Flex, Text } from '@chakra-ui/core'
import Link from '../../components/Link'

//TODO: Clean up the naming of characters/classes/display names.  It's pretty verbose/annoying/not even clear
//Look up what Gloomhaven calls them
//Could just expect an object that combines the user specified name all the other initial character data we will need anyway
const CharacterCard = ({ name, characterClass, setActiveDeck }, ...props) => {
	const handleClick = () => setActiveDeck({ name: name, class: characterClass })

	return (
		<Link to="/deck" onClick={handleClick}>
			<Flex
				direction="column"
				borderRadius="8px"
				border="1px solid black"
				maxWidth="90vw"
				margin="0 auto 1rem auto"
				bg="#D8D8D8"
				padding="16px"
			>
				<Text as="span" fontSize="lg" marginBottom="0.5rem">
					{name}
				</Text>
				<Text fontSize="sm" alignSelf="flex-end">
					{characterClass}
				</Text>
			</Flex>
		</Link>
	)
}

export default CharacterCard