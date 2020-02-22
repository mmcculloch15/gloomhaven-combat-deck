import React from 'react'
import { perkType } from 'types'
import PropTypes from 'prop-types'
import { Checkbox } from '@chakra-ui/core'

const PerkGroup = ({ perks, onChange }) => (
  <>
    {perks.map((perk, i) => (
      <Checkbox size="lg" name={`${perk.name}-${i}`} value={perk.active} onChange={e => onChange(e, perk)} perk={perk}>
        {perk.name}
      </Checkbox>
    ))}
  </>
)

PerkGroup.propTypes = {
  perks: PropTypes.arrayOf(perkType),
  onChange: PropTypes.func,
}
export default PerkGroup
