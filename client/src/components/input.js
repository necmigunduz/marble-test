import React, { useEffect, useState } from "react";
import { FetchOptions } from "../api/fetchData";

export default function Input(props) {
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);

  const getOptions = async (q_id) => {
    let os = await FetchOptions(q_id);
    setOptions(os);
  };

  useEffect(() => {
    getOptions(props.qId);
  }, [props.qId]);
  
  let sum = 0;
  const scoreHandler = async (e, id) => {
    sum += parseInt(e.target.value)
    setScore(sum)
  };

  return (
    <div>
      {options.map((option) => {
        return (
          <div key={option.id}>
            <input
              type="radio"
              key={option.id}
              className="action"
              name={option.question_id}
              id="track"
              value={option.o_point}
              onChange={(e) => scoreHandler(e, option.question_id)}
            />
            <label htmlFor="track">{option.o_text}</label>
            <br />
          </div>
        );
      })}
      <p>{score}</p>
    </div>
  );
}
