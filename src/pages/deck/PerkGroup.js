import React from 'react'
import { perkType } from 'types'
import PropTypes from 'prop-types'
import { Checkbox, CheckboxGroup } from '@chakra-ui/core'

const PerkGroup = ({ perks, onChange }) => (
  <>
    {perks.map(perk => (
      <Checkbox size="lg" name={perk.name} onChange={onChange}>
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
