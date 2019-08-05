//TODO: Character icons added here

const CHARACTERS = [
  {
    displayName: 'Inox Brute',
    class: "brute",
    rules: [
      {
        name: "Remove two -1 cards",
        count: 1,
        effect: {
          "-1": -2,
        }
      },
      {
        name: "Replace one -1 card with one +1 card",
        count: 1,
        effect: {
          "-1": -1,
          "+1": 1,
        }
      },
      {
        name: "Add two +1 cards",
        count: 2,
        effect: {
          "+1": 2,
        }
      },
    ]
  },
  {
    displayName: 'Savvas Cragheart',
    class: 'cragheart',
    rules: [
      {
        name: "Remove four +0 cards",
        count: 1,
        effect: {
          "+0": -4
        }
      },
      {
        name: "Replace one -1 card with one +1 card",
        count: 2,
        effect: {
          "-1": -1,
          "+1": 1,
        }
      },
      {
        name: "Add one -2 card and two +2 cards",
        count: 1,
        effect: {
          "-2": -1,
          "+2": 2
        }
      }

    ]
  }
]

export default CHARACTERS