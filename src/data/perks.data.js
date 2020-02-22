const PERKS = {
  brute: [
    {
      name: 'Remove two -1 cards',
      count: 1,
      effect: {
        minusOne: -2,
      },
      active: 0,
    },
    {
      name: 'Replace one -1 card with one +1 card',
      count: 1,
      effect: {
        minusOne: -1,
        plusOne: 1,
      },
      active: 0,
    },
    {
      name: 'Add two +1 cards',
      count: 2,
      effect: {
        plusOne: 2,
      },
      active: 0,
    },
  ],
  cragheart: [
    {
      name: 'Remove four +0 cards',
      count: 1,
      effect: {
        zero: -4,
      },
      active: 0,
    },
    {
      name: 'Replace one -1 card with one +1 card',
      count: 2,
      effect: {
        minusOne: -1,
        plusOne: 1,
      },
      active: 0,
    },
    {
      name: 'Add one -2 card and two +2 cards',
      count: 1,
      effect: {
        minusTwo: 1,
        plusTwo: 2,
      },
      active: 0,
    },
  ],
}

export default PERKS
