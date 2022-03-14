import React, { useEffect, useState } from "react";
import { FetchQuestions } from "../api/fetchData";
import Input from "./input";
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
    alert('See below to see your score!')
    setShowInfo(true);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="card">
          <h1 className="bg-danger text-white my-2 p-2 fw-bold">
            Subject Quiz -I-
          </h1>
          <ul className="list-group list-group-flush card-body mx-5 list-unstyled">
            {questions.map((question) => {
              return (
                <li key={question.id} className="bg-light m-3 border">
                  <p className="border bg-dark text-white card-title p-4 fs-5">
                    <span>{questions.indexOf(question) + 1}</span>-{" "}
                    {question.q_text}
                  </p>
                  <Input qId={question.id} total={total} />
                </li>
              );
            })}
          </ul>
          <button type="submit" className="btn btn-secondary w-100 m-auto p-2 fw-bold fs-5">
            Submit my answers
          </button>
        </form>
      </div>
      <div className="p-5">{showInfo ? <ShowInfo score={totalScore} /> : null}</div>
    </div>
  );
}
