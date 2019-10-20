import React from 'react'
import Link from './Link'

const CTA = ({ children, to, onClick, marginTop }) => (
	<Link
		bg="green.400"
		width="100%"
		fontSize="lg"
		borderRadius="8px"
		textAlign="center"
		textDecoration="none"
		padding="0.5rem"
		border="1px solid black"
		to={to}
		onClick={onClick}
		marginTop={marginTop}
	>
		{children}
	</Link>
)

export default CTA
