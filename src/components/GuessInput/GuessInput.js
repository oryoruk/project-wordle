import React from "react";

function GuessInput({ allGuesses, setAllGuesses }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.length === 5) {
          // console.log(guess);
          let newAllGuesses = [...allGuesses];
          newAllGuesses.push(guess);
          setAllGuesses(newAllGuesses);
          setGuess("");
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        id="guess-input"
        type="text"
        onChange={(event) => {
          let newGuess = event.target.value.toUpperCase();
          if (newGuess.length <= 5) {
            setGuess(newGuess);
          }
        }}
      />
    </form>
  );
}

export default GuessInput;
