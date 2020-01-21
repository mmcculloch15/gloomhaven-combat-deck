const PERKS = {
  brute: [
    {
      name: 'Remove two -1 cards',
      count: 1,
      effect: {
        minusOne: -2,
      },
      active: false,
    },
    {
      name: 'Replace one -1 card with one +1 card',
      count: 1,
      effect: {
        minusOne: -1,
        plusOne: 1,
      },
      active: false,
    },
    {
      name: 'Add two +1 cards',
      count: 2,
      effect: {
        plusOne: 2,
      },
      active: false,
    },
  ],
  cragheart: [
    {
      name: 'Remove four +0 cards',
      count: 1,
      effect: {
        '+0': -4,
      },
      active: false,
    },
    {
      name: 'Replace one -1 card with one +1 card',
      count: 2,
      effect: {
        '-1': -1,
        '+1': 1,
      },
      active: false,
    },
    {
      name: 'Add one -2 card and two +2 cards',
      count: 1,
      effect: {
        '-2': -1,
        '+2': 2,
      },
      active: false,
    },
  ],
}

export default PERKS
