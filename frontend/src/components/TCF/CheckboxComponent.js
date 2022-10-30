import { Checkbox } from '@mui/material'
import React from 'react'

const CheckboxComponent = ({
  input: { checked, onChange, ...restInput },
  meta,
  ...rest
}) => (
  <Checkbox
    {...rest}
    inputProps={restInput}
    onChange={onChange}
    checked={Boolean(checked)}
  />
)

export default CheckboxComponent