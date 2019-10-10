import React from 'react'
import { PrimaryLink } from '../elements/links'
import styled from 'styled-components'

const StyledHome = styled.section`
	display: flex;
	flex-direction: column;
	height: 100px;
	justify-content: space-between;
`

const HomePage = ({ activeDeck }) => (
	<StyledHome>
		App!
		{activeDeck !== '' ? <PrimaryLink to="/deck">Active Deck</PrimaryLink> : null}
		<PrimaryLink to="/characters">Characters</PrimaryLink>
	</StyledHome>
)

export default HomePage
