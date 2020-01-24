import React from 'react'
import { Box } from '@chakra-ui/core'
import PropTypes from 'prop-types'

const PageContainer = ({ children }) => (
  <Box maxWidth="800px" m="auto" bg="white" h="100vh" border="1px solid #f2f2f2">
    {children}
  </Box>
)

PageContainer.propTypes = {
  children: PropTypes.any,
}

export default PageContainer
