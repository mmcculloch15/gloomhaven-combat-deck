import React from 'react'
import PropTypes from 'prop-types'
import { Flex, PseudoBox, Text, Icon } from '@chakra-ui/core'
import Link from 'components/Link'
import { capitalize } from 'utils/helpers'

// TODO: remove this when no longer necessary

// TODO: Clean up the naming of characters/classes/display names.  It's pretty verbose/annoying/not even clear
// Look up what Gloomhaven calls them
// Could just expect an object that combines the user specified name all the other initial character data we will need anyway
const CharacterCard = ({ name, characterClass }) => (
  <Link to="/deck/dDCkr5SmFokyKtA1qTMu">
    <PseudoBox
      display="flex"
      flexDirection="column"
      borderRadius="8px"
      border="1px solid black"
      m="0 auto 1rem auto"
      bg="#D8D8D8"
      p="1rem"
    >
      <Flex justify="space-between">
        <Text as="span" fontSize="lg" mb="0.5rem">
          {name}
        </Text>
        <Icon name={characterClass} size="24px" mr="8px" />
      </Flex>
      <Text fontSize="sm" alignSelf="flex-end">
        {capitalize(characterClass)}
      </Text>
    </PseudoBox>
  </Link>
)

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  characterClass: PropTypes.string.isRequired,
}

export default CharacterCard
