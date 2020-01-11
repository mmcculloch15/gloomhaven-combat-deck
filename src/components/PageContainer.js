import React from 'react'
import { Box } from '@chakra-ui/core'



const PageContainer = ({ children }) => (
  <Box maxWidth="800px" m="auto" bg="white" h="100vh" border="1px solid #f2f2f2">
  {children}
  </Box>
)

export default PageContainer