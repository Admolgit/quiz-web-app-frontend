import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

const Game = () => {
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState([]);
  const questionList = useSelector(state => state.questionList);

  // const ques = async () => {
  //   const data = await axios.get(`http://localhost:3400/api/questions`)
  //   const response = await data.data
  //   setQuestions(response)
  // }

  // useEffect(() => {
  //   ques()
  // }, []);

  console.log(questionList)

  return (
    <React.Fragment>
      <div className='container'>
        <div id='games' className='justify-center flex-column'>
          <div className='hud'>
            <div id='hud-item'>
              <p className='hud-prefix'>Question</p>
              <h1 className='hud-main-text' id='questionCounter'></h1>
            </div>
            <div id='hud-item'>
              <p className='hud-prefix'>score</p>
              <h1 className='hud-main-text' id='score'>
                0
              </h1>
            </div>
          </div>
          <h2 id='question'></h2>
          <div className='choice-container'>
            <p className='choice-prefix'>A</p>
            <p className='choice-text' data-number='1'>
              Choice 1
            </p>
          </div>
          <div className='choice-container'>
            <p className='choice-prefix'>B</p>
            <p className='choice-text' data-number='2'>
              Choice 2
            </p>
          </div>
          <div className='choice-container'>
            <p className='choice-prefix'>C</p>
            <p className='choice-text' data-number='3'>
              Choice 3
            </p>
          </div>
          <div className='choice-container'>
            <p className='choice-prefix'>D</p>
            <p className='choice-text' data-number='4'>
              Choice 4
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Game;
