import React from 'react'
import { characterType } from 'types'
import { PseudoBox, Text, Icon } from '@chakra-ui/core'
import { useRouteMatch } from 'react-router-dom'
import Link from '../../components/Link'

const ClassCard = ({ character }) => {
  const { path } = useRouteMatch()

  return (
    <Link to={`${path}/${character.class}`}>
      <PseudoBox
        display="flex"
        justifyContent="center"
        h="70px"
        w="100%"
        border="1px solid black"
        borderRadius="8px"
        bg="#D8D8D8"
        mb="1rem"
        p="1rem"
      >
        <Icon name={character.class} size="1.5rem" mr="0.5rem" />
        <Text fontSize="lg" textAlign="center">
          {character.displayName}
        </Text>
      </PseudoBox>
    </Link>
  )
}

ClassCard.propTypes = {
  character: characterType,
}

export default ClassCard
