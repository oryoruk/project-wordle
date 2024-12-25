import React from "react";

function Banner({ gameWon, answer, noOfGuesses }) {
  return (
    <div className={gameWon ? "happy banner" : "sad banner"}>
      <p>
        {gameWon ? (
          <>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{noOfGuesses}</strong>.
          </>
        ) : (
          <>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </>
        )}
      </p>
    </div>
  );
}

export default Banner;
