import { shape, string, number, arrayOf, object, bool, func } from 'prop-types'

export const cardType = shape({
  type: string.isRequired,
  count: number.isrequired,
  image: string.isRequired,
})

export const deckType = shape({
  name: string.isRequired,
  class: string.isRequired,
  cards: arrayOf(cardType),
})

export const perkType = shape({
  name: string.isRequired,
  count: number.isRequired,
  effect: object.isRequired,
  active: bool,
})

export const characterType = shape({
  name: string.isRequired,
  class: string.isRequired,
  cards: arrayOf(cardType),
})

export const setActiveDeckType = func.isRequired
