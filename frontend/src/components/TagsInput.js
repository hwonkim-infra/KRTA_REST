import { Chip, makeStyles, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Fragment } from 'react'
import Downshift from "downshift";

const useStyles = makeStyles(theme => ({
    chip: {
        margin: theme.spacing(0.5, 0.25)
    }
}))

const TagsInput = ({...props}) => {
    const classes = useStyles();
    const {selectedTags, placeholder, tags, ...other} = props;

    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState([]);
    useEffect(() => {
        setSelectedItem(tags);
    }, [tags]);

    useEffect(() => {
      selectedTags(selectedItem);
    }, [selectedItem, selectedTags]);

    const handleKeyDOwn = (event) => {
        if (event.key === "Enter") {
            const newSelectedItem = [...selectedItem];
            const duplicatedValues = newSelectedItem.indexOf(event.target.value.trim());

            if (duplicatedValues !== -1) {
                setInputValue('');
                return;
            }

            if (!event.target.value.replace(/\s/g,'').length) return;

            newSelectedItem.push(event.target.value.trim());
            setSelectedItem(newSelectedItem);
            setInputValue('');

        }
        if (
            selectedItem.length && !inputValue.length && event.key === "Backspace"
        ) {
            setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
        }
    }
    

    const handleChange = (item) => {
        let newSelectedItem = [...selectedItem];
        if (newSelectedItem.indexOf(item) === -1) {
            newSelectedItem = [...newSelectedItem, item];
        }
        setInputValue('');
        setSelectedItem(newSelectedItem)
    }

    const handleDelete = item => () => {
        const newSelectedItem = [...selectedItem];
        newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
        setSelectedItem(newSelectedItem);
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
    return (
        <Fragment>
        <Downshift 
            id="downshift-multiple"
            inputValue={inputValue}
            onChange={handleChange}
            selectedItem={selectedItem}
        >
            {({getInputProps}) => {
                const {onBlur, onChange, onFocus, ...inputProps} = getInputProps({
                    onKeyDown: handleKeyDOwn,
                    placeholder
                });
                return (
                    <div>
                        <TextField
                            InputProps={{
                                startAdornment: selectedItem.map(item => (
                                    <Chip
                                        key={item}
                                        tabIndex={-1}
                                        label={item.label}
                                        className={classes.chip}
                                        onDelete={handleDelete(item)}
                                    />
                                )), onBlur, onChange: event => {
                                    handleInputChange(event);
                                    onChange(event)
                                }, onFocus
                            }} {...other} {...inputProps} />
                    </div>
                )

            }}
            </Downshift>
        </Fragment>
    )
}

export default TagsInput
