import React from 'react'
import styled from 'styled-components'

const DeckModification = styled.section`
	border: 1px solid blue;
	height: 90vh;
`

const DeckModificationPage = ({ activeDeck }) => (
	<DeckModification>
		<h1>New deck: {activeDeck}</h1>
	</DeckModification>
)

export default DeckModificationPage
