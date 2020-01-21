import React, { useState } from 'react'
import characters from 'data/characters.data'
import { Flex, Icon, Heading, Input, Text } from '@chakra-ui/core'
import { capitalize } from 'utils/helpers'
import CTA from 'components/CTA'
import BASE_COMBAT_DECK from 'data/base-combat-deck.data'
import PERKS from 'data/perks.data'
import { useRouteMatch } from 'react-router-dom'
import { setActiveDeckType } from 'types'
import Perk from './Perk'

const StartNewCharacterPage = ({ setActiveDeck }) => {
  const [deckName, setDeckName] = useState('')
  const match = useRouteMatch()
  const handleChange = event => setDeckName(event.target.value)
  const character = characters.find(character => character.class === match.params.class)

  return (
    <Flex direction="column" p="0.5rem">
      <Flex mb="2rem">
        <Icon name={character.class} size="3rem" mr="1rem" />
        <Heading as="h1" fontSize="40px">
          {capitalize(character.class)}
        </Heading>
      </Flex>
      <Text as="label" fontSize="xl" fontWeight="bold" mb="0.25rem" htmlFor="deckName">
        Character Name
      </Text>
      <Input id="deckName" variant="outline" value={deckName} onChange={handleChange} mb="1rem" />
      <Heading as="h2" fontSize="xl" mb="0.5rem">
        Perks
      </Heading>
      {PERKS[character.class].map((perk, i) => (
        <Perk count={perk.count} name={perk.name} key={`perk${i}`} />
      ))}
      <CTA
        to="/deck"
        onClick={() =>
          setActiveDeck({
            name: deckName,
            class: character.class,
            cards: BASE_COMBAT_DECK,
            perks: PERKS[character.class],
          })
        }
        mt="3rem"
      >
        Start new deck
      </CTA>
    </Flex>
  )
}

StartNewCharacterPage.propTypes = {
  setActiveDeck: setActiveDeckType,
}

export default StartNewCharacterPage
