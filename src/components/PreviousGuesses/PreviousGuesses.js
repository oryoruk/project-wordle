import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function PreviousGuesses({ answer, allGuesses }) {
  return (
    <div className="guess-results">
      {/*{allGuesses.map((guess, index) => (*/}
      {/*  <p key={index} className="guess">*/}
      {/*    {guess}*/}
      {/*  </p>*/}
      {/*))}*/}
      {range(0, NUM_OF_GUESSES_ALLOWED).map((row) => (
        <Guess key={row} answer={answer} guess={allGuesses[row]} />
      ))}
    </div>
  );
}

export default PreviousGuesses;
