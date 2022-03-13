import React, { useEffect, useState } from "react";
import { FetchQuestions } from "../api/fetchData";

import Input from "./input";

export default function Display() {
  const [questions, setQuestions] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  const getQuestions = async () => {
    const qs = await FetchQuestions();
    setQuestions(qs);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const total = () => {
    const answers =  document.querySelectorAll("input[type=radio]:checked");
    setTotalScore(0);
    let score = 0;
    for(let i = 0; i < answers.length; i++) {
      score += Number(answers[i].value);
    }
    setTotalScore(score);
  }
  
  return (
    <div>
      Total: {totalScore}
      <form action="/action_page.php">
        <ol>
          {questions.map((question) => {
            return (
              <li key={question.id}>
                <fieldset>
                  <legend>{question.q_text}</legend>
                  <Input qId={question.id} total={total} />
                </fieldset>
              </li>
            );
          })}
        </ol>
        <button type="submit">Submit my answers</button>
      </form>
    </div>
  );
}
