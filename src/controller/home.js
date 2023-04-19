import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <div class='container'>
        <div id='home' class='flex-center flex-column'>
          <h1>Football Quiz</h1>
          <Link to='/game'>
            <button className="btn">Play Game</button>
          </Link>
          <Link to=''>
            <button className="btn">Highest Score</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
