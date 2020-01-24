import React from 'react'
import { Icon, Box } from '@chakra-ui/core'
import { getImageFromType } from 'data/base-combat-deck.data'
import { cardType } from 'types'

// Maybe use the `copy` icon here instead, with a number on it? Might just look nicer, and takes up less space than a badge

const CombatCard = ({ type, count, image }) => (
  <Box
    direction="column"
    w="100%"
    border="1px solid black"
    borderRadius="8px"
    backgroundImage={`url(${getImageFromType(type)})`}
    backgroundSize="100% 100%"
    backgroundPosition="center"
    pt="63%" // this locks the CombatCard to a particular aspect ratio
    position="relative" // this is so we can absolutely position the count box below, to account for the aspect ratio scaling above
  >
    {count > 1 ? (
      <Box
        bg="green.400"
        left="-1px"
        top="-1px"
        w="2.5rem"
        h="2rem"
        p="0.25rem"
        color="black"
        position="absolute"
        borderTopLeftRadius="8px"
        borderBottomRightRadius="8px"
        textAlign="center"
      >
        {count}
        <Icon name="copy" size="1rem" ml="0.25rem" mb="2px" />
      </Box>
    ) : null}
  </Box>
)

CombatCard.propTypes = cardType

export default CombatCard
