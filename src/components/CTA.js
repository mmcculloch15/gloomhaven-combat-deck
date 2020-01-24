import React from 'react'
import { Button } from '@chakra-ui/core'
import PropTypes from 'prop-types'
import Link from './Link'

const CTA = ({ children, to, onClick, mt, type = 'link' }) => {
  const styles = {
    bg: 'green.400',
    w: '100%',
    fontSize: 'lg',
    borderRadius: '8px',
    textAlign: 'center',
    textDecoration: 'none',
    p: '0.5rem',
    border: '1px solid black',
    to,
    onClick,
    mt,
  }

  if (type === 'button') {
    return <Button {...styles}>{children}</Button>
  }
  if (type === 'link') {
    return <Link {...styles}>{children}</Link>
  }
}

CTA.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  mt: PropTypes.string,
  type: PropTypes.string,
}

export default CTA
