import React, { useContext, useEffect, useState } from 'react'
import Link from 'components/Link'
import { deckType } from 'types'
import { Flex, Heading, Grid, Checkbox } from '@chakra-ui/core'
import CombatCard from 'components/CombatCard'
import { ActiveDeckContext } from 'providers/ActiveDeckProvider'
import { firestore } from 'firebaseUtils'
import { useParams } from 'react-router-dom'

const ActiveDeckPage = () => {
  const [loading, setLoading] = useState(true)
  const { activeDeck, setActiveDeck } = useContext(ActiveDeckContext)
  const { deckId } = useParams()

  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const deck = await firestore.doc(`decks/${deckId}`).get()
        setActiveDeck({
          ...deck.data(),
        })
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchDeck()
  }, [deckId, setActiveDeck])
  const handlePerkChange = () => {
    console.log('hi')
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
        <Checkbox size="lg" onChange={handlePerkChange}>
          My perk
        </Checkbox>
      </Flex>
      <Grid templateColumns="1fr 1fr" gap="1rem" width={['100%', '100%', '50%']}>
        {activeDeck.cards.map(card => (
          <CombatCard type={card.type} count={card.count} image={card.image} />
        ))}
      </Grid>
      <Link to="/home">Go home</Link>
    </Flex>
  )
}

export default ActiveDeckPage

// TODO: update cards so that they don't have a image in them. Create a method to handle grabbing the right image
