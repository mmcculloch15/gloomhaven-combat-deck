// TODO: Maybe image links?

import zero from 'assets/cards/zero.png'
import plusOne from 'assets/cards/plusOne.png'
import plusTwo from 'assets/cards/plusTwo.png'
import nullCard from 'assets/cards/null.png'
import timesTwo from 'assets/cards/timesTwo.png'
import minusOne from 'assets/cards/minusOne.png'
import minusTwo from 'assets/cards/minusTwo.png'

const BASE_COMBAT_DECK = [
  {
    type: 'null',
    count: 1,
    image: nullCard,
  },
  {
    type: 'timesTwo',
    count: 1,
    image: timesTwo,
  },
  {
    type: 'plusTwo',
    count: 1,
    image: plusTwo,
  },
  {
    type: 'plusOne',
    count: 5,
    image: plusOne,
  },
  {
    type: 'zero',
    count: 6,
    image: zero,
  },
  {
    type: 'minusOne',
    count: 5,
    image: minusOne,
  },
  {
    type: 'minusTwo',
    count: 1,
    image: minusTwo,
  },
]

export default BASE_COMBAT_DECK
