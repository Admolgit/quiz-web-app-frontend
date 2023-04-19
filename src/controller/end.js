import React from "react";
import { Link } from "react-router-dom";

const End = () => {
  return (
    <React.Fragment>
      <div class='container'>
        <div id='end' class='flex-center flex-column'>
          <h1 id='finalScore'>0</h1>
          <form>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='username'
            />
            <Link>
              <button
                type='submit'
                class='btn'
                id='saveScoreBtn'
                onclick='saveHighScore(e)'
                disabled
              >
                Save
              </button>
            </Link>
            <Link to='/game'>
              <button
                type='submit'
                class='btn'
                id='saveScoreBtn'
                onclick='saveHighScore(e)'
              >
                Play Again
              </button>
            </Link>
            <Link to='/'>
              <button
                type='submit'
                class='btn'
                id='saveScoreBtn'
                onclick='saveHighScore(e)'
              >
                Go Home
              </button>
            </Link>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default End;
