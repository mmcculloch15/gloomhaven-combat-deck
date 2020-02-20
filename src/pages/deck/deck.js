import React, { useContext, useEffect, useState } from 'react'
import Link from 'components/Link'
import { Flex, Heading, Grid, Checkbox, CheckboxGroup } from '@chakra-ui/core'
import CombatCard from 'components/CombatCard'
import { ActiveDeckContext } from 'providers/ActiveDeckProvider'
import { firestore } from 'firebaseUtils'
import { useParams } from 'react-router-dom'
import Perk from 'pages/start-new-character/Perk'
import BASE_COMBAT_DECK from 'data/base-combat-deck.data'
import PERKS from 'data/perks.data'
import PerkGroup from './PerkGroup'

const ActiveDeckPage = () => {
  const [loading, setLoading] = useState(true)
  const { activeDeck, setActiveDeck } = useContext(ActiveDeckContext)
  const { deckId } = useParams()
  console.log('ACTIVE DECK', activeDeck)

  useEffect(() => {
    const fetchDeck = async () => {
      try {
        // const deck = await firestore.doc(`decks/${deckId}`).get()
        setActiveDeck({
          name: 'Lance Tanzarian',
          class: 'cragheart',
          cards: BASE_COMBAT_DECK,
          perks: PERKS.cragheart,
        })
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchDeck()
    // eslint-disable-next-line
  }, [])

  const handlePerkChange = (e, targetPerk) => {
    const { checked } = e.target
    const updatedPerks = activeDeck.perks
    const targetPerkIndex = updatedPerks.findIndex(perk => perk.name === targetPerk.name)
    if (checked) updatedPerks[targetPerkIndex].active++
    else updatedPerks[targetPerkIndex].active--

    setActiveDeck({
      ...activeDeck,
      perks: updatedPerks,
    })
  }

  if (loading) {
    return null
  }

  return (
    <Flex direction="column" p="0.5rem">
      <Heading as="h1" fontSize="xl" mb="2rem">
        {activeDeck.name}
      </Heading>
      <Flex direction="column" mb="1rem">
        <PerkGroup perks={activeDeck.perks} onChange={handlePerkChange} />
      </Flex>
      <Grid templateColumns="1fr 1fr" gap="1rem" width={['100%', '100%', '50%']}>
        {activeDeck.cards.map((card, i) => (
          <CombatCard type={card.type} count={card.count} key={`card-${i}`} />
        ))}
      </Grid>
      <Link to="/home">Go home</Link>
    </Flex>
  )
}

export default ActiveDeckPage

// TODO: update cards so that they don't have a image in them. Create a method to handle grabbing the right image
