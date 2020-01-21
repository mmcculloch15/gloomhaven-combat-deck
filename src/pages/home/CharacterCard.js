import React from 'react'
import PropTypes from 'prop-types'
import { Flex, PseudoBox, Text, Icon } from '@chakra-ui/core'
import Link from 'components/Link'
import { capitalize } from 'utils/helpers'

// TODO: remove this when no longer necessary
import BASE_COMBAT_DECK from 'data/base-combat-deck.data'
import PERKS from 'data/perks.data'

// TODO: Clean up the naming of characters/classes/display names.  It's pretty verbose/annoying/not even clear
// Look up what Gloomhaven calls them
// Could just expect an object that combines the user specified name all the other initial character data we will need anyway
const CharacterCard = ({ name, characterClass, setActiveDeck }, ...props) => {
  const handleClick = () =>
    setActiveDeck({
      name,
      class: characterClass,
      cards: BASE_COMBAT_DECK,
      perks: PERKS[characterClass],
    })

  return (
    <Link to="/deck" onClick={handleClick}>
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
}

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  characterClass: PropTypes.string.isRequired,
  setActiveDeck: PropTypes.func.isRequired,
}

export default CharacterCard
