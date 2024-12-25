import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, guess = "     " }) {
  // console.log({ answer });

  let checkResult = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(0, 5).map((index) => (
        <span
          key={index}
          className={`cell ${
            guess[index] === " " ? "" : checkResult[index].status
          }`}
        >
          {guess[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
