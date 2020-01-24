import React from 'react'
import PropTypes from 'prop-types'
import { Link as ChakraLink } from '@chakra-ui/core'
import { Link as RouterLink } from 'react-router-dom'

const Link = ({ children, to, ...props }) => (
  <ChakraLink to={to} as={RouterLink} {...props}>
    {children}
  </ChakraLink>
)

Link.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
}

export default Link
