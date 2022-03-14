import React, { useEffect, useState } from "react";
import { FetchQuestions } from "../api/fetchData";
import Input from "./input";
import showInfo from "../components/showInfo";
import ShowInfo from "../components/showInfo";

export default function Display() {
  const [questions, setQuestions] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const getQuestions = async () => {
    const qs = await FetchQuestions();
    setQuestions(qs);
  };

  useEffect(() => {
    getQuestions();
  }, [questions]);

  const total = () => {
    const answers = document.querySelectorAll("input[type=radio]:checked");
    setTotalScore(0);
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
      score += Number(answers[i].value);
    }
    setTotalScore(score);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowInfo(true);
  };

  return (
    <div>
      <div>
        <form action="/action_page.php" onSubmit={handleSubmit}>
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
      <div>{showInfo ? <ShowInfo score={totalScore}/> : null}</div>
    </div>
  );
}
