import React from 'react'
import PropTypes from 'prop-types'
import { Heading } from '@chakra-ui/core'
import CharacterCard from './CharacterCard'

const CharacterGroup = ({ savedCharacters }) => (
  <>
    <Heading as="h2" mb="1rem" fontSize="xl" m="0 auto 16px auto">
      Characters
    </Heading>
    {savedCharacters.map((character, i) => (
      <CharacterCard name={character.name} characterClass={character.class} />
    ))}
  </>
)

CharacterGroup.propTypes = {
  savedCharacters: PropTypes.array.isRequired,
}

export default CharacterGroup
