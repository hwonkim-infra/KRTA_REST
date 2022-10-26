import { Chip, TextField } from '@mui/material';
import React from 'react'
import { Fragment } from 'react'

const TagsInput = () => {
    return (
        <Fragment>
            {() => {
                const {} = getInputProps({});
                return (
                    <div>
                        <TextField
                            InputProps={{
                                startAdornment: selectedItem.map(item => (
                                    <Chip/>
                                )), onBlur, onChange: event => {}, onFocus
                            }} {...other} {...inputProps} />
                    </div>
                )

            }}
            
        </Fragment>
    )
}

export default TagsInput
