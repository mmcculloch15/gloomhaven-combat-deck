import React from 'react'
import Link from './Link'

const CTA = ({ children, to }, ...props) => (
	<Link
		bg="green.400"
		width="100%"
		maxW="90vw"
		margin="0 auto"
		fontSize="lg"
		borderRadius="8px"
		textAlign="center"
		textDecoration="none"
		padding="0.5rem"
		border="1px solid black"
		to={to}
		{...props}
	>
		{children}
	</Link>
)

export default CTA
