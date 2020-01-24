import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const ActiveDeckContext = createContext({
  activeDeck: {},
  setActiveDeck: () => {},
})

const ActiveDeckProvider = ({ children, value }) => (
  <ActiveDeckContext.Provider value={value}>{children}</ActiveDeckContext.Provider>
)

ActiveDeckProvider.propTypes = {
  children: PropTypes.any,
  value: PropTypes.any,
}

ActiveDeckProvider.displayName = 'ActiveDeckProvider'

export default ActiveDeckProvider
