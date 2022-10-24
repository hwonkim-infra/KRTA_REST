import React from "react";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";

const PSCdetailInput = (values = {}) => {
  return (
    <>
      <FieldArray name="actions">
        {({ fields }) =>
          fields.map((name, index) => (
            <div key={name}>
              <label>Detail Action. #{index + 1}</label>
              <Field
                name={`${name}.subItem`}
                component="input"
                placeholder="sub Item"
              />
              <Field
                name={`${name}.subAction`}
                component="input"
                placeholder="sub Action"
              />

              <span
                onClick={() => fields.remove(index)}
                style={{ cursor: "pointer" }}
              >
                ❌
              </span>
            </div>
          ))
        }
      </FieldArray>
    </>
  );
};

export default PSCdetailInput;
