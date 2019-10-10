import React from 'react'
import styled from 'styled-components'
import { PrimaryLink } from '../elements/links'

const StyledActiveDeckPage = styled.section`
	border: 1px solid blue;
	height: 90vh;
`

const ActiveDeckPage = ({ activeDeck }) => (
	<StyledActiveDeckPage>
		<h1>New deck: {activeDeck}</h1>

		<PrimaryLink to="/home">Go home</PrimaryLink>
	</StyledActiveDeckPage>
)

export default ActiveDeckPage
