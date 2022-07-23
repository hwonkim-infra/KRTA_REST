import React from "react";
import { render } from "react-dom";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import createDecorator from "final-form-calculate";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const calculator = createDecorator(
  {
    field: "price",
    updates: {
      totalPrice: (value, allValues) => {
        let val = value || 0;
        let amount = allValues.amount || 0;
        return val * amount;
      },
    },
  },
  {
    field: "amount",
    updates: {
      totalPrice: (value, allValues) => {
        let val = value || 0;
        let price = allValues.price || 0;
        return val * price;
      },
    },
  },
  {
    field: "totalPrice",
    updates: {
      amount: (value, allValues) => {
        let val = value || 0;
        let price = allValues.price || 0;
        return val / price;
      },
    },
  }
);

const App = () => (
  <Styles>
    <Form
      onSubmit={onSubmit}
      decorators={[calculator]}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label> Price </label>{" "}
            <Field
              name="price"
              component="input"
              type="number"
              placeholder="Price"
            />
          </div>{" "}
          <div>
            <label> Amount </label>{" "}
            <Field
              name="amount"
              component="input"
              type="number"
              placeholder="Amount"
            />
          </div>{" "}
          <div>
            <label> Total </label>{" "}
            <Field
              name="totalPrice"
              component="input"
              type="number"
              placeholder="Total Price"
              readOnly
            />
          </div>{" "}
          <hr />
          <hr />
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit{" "}
            </button>{" "}
            <button
              type="button"
              onClick={reset}
              disabled={submitting || pristine}
            >
              Reset{" "}
            </button>{" "}
          </div>{" "}
          <pre> {JSON.stringify(values, 0, 2)} </pre>{" "}
        </form>
      )}
    />{" "}
  </Styles>
);

render(<App />, document.getElementById("root"));
