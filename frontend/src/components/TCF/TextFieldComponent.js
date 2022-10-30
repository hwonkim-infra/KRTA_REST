import { TextField } from '@mui/material'
import React from 'react'

const TextFieldComponent =  ({
  input: { name, onChange, value, ...restInput },
  meta,
  ...rest
}) => (
  <TextField
    {...rest}
    name={name}
    helperText={meta.touched ? meta.error : undefined}
    error={meta.error && meta.touched}
    InputProps={restInput}
    onChange={onChange}
    value={value}
  />
)

export default TextFieldComponent
