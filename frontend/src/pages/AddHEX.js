import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { createHEX } from "../actions/HEXs";
import HEXForm from '../components/HEXForm';

const AddHEX = () => {
    const initialHEXState = {
        model_name: '',
        serial_no: '',
    }
    const [HEX, setHEX] = useState(initialHEXState);
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setHEX({ ...HEX, [name]: value });
    };

    const saveHEX = () => {
        const { model_name, serial_no } = HEX;
        dispatch(createHEX(HEX)).then(data => {setHEX({
            id: data.id,
            model_name: data.model_name,
            serial_no: data.serial_no,
        });
        setSubmitted(true);
        console.log(data)
        }).catch(err => {
            console.log(err);
        });
    };

    const newHEX = () => {
        setHEX(initialHEXState);
        setSubmitted(false);
    }

  return (
    <div>
              <HEXForm HEXData = {HEX} ></HEXForm>

    </div>
  )
}

export default AddHEX