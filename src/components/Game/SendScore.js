import { useRef, useState } from "react";
import { isEmpty } from "../../utils/game-utils";
import { v4 as uuidv4 } from "uuid";
import classes from "./SendScore.module.scss";

const SendScore = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
  });

  const nameInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;

    const enteredValidName = !isEmpty(enteredName);

    setFormInputValidity({
      name: enteredValidName,
    });

    const isFormValid = enteredValidName;

    if (!isFormValid) {
      return;
    }

    props.onSubmit({
      id: uuidv4(),
      name: enteredName,
      score: props.bestScore,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={`${classes.control} ${
          formInputValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default SendScore;
