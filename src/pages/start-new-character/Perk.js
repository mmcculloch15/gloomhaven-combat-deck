import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box, Text } from '@chakra-ui/core'

// ? Could we use the same component to track actual perk checkmarks?
const Perk = ({ count, name, effect, active }) => (
  <Flex mb="0.5rem">
    {[...Array(count)].map((e, i) => (
      <Box h="24px" w="24px" border="1px dashed black" mr="0.5rem" key={`${name}-${i}`} />
    ))}
    <Text>{name}</Text>
  </Flex>
)

// TODO: Update this once final
Perk.propTypes = {
  count: PropTypes.any,
  name: PropTypes.any,
  active: PropTypes.any,
  effect: PropTypes.any,
}

export default Perk
