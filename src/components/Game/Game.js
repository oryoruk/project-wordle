import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import PreviousGuesses from "../PreviousGuesses";
import GuessInput from "../GuessInput";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function rightAnswer(guess) {
  if (guess === answer) {
    // setGameWon(true);
    return true;
  } else {
    // setGameWon(false);
    return false;
  }
  // return true;
}

function checkEndOfGame(allGuesses) {
  let currentNoOfGuesses = allGuesses.length;
  console.log(allGuesses[currentNoOfGuesses - 1]);
  if (currentNoOfGuesses > 5 || rightAnswer(allGuesses[currentNoOfGuesses - 1]))
    return true;
}
function Game() {
  const [allGuesses, setAllGuesses] = React.useState([]);

  return (
    <>
      <PreviousGuesses answer={answer} allGuesses={allGuesses} />
      <GuessInput allGuesses={allGuesses} setAllGuesses={setAllGuesses} />
      {checkEndOfGame(allGuesses) ? (
        <Banner
          gameWon={rightAnswer(allGuesses[allGuesses.length - 1])}
          answer={answer}
          noOfGuesses={allGuesses.length}
        />
      ) : null}
    </>
  );
}

export default Game;
