import React, { useEffect, useState } from "react";
import { FetchOptions } from "../api/fetchData";

export default function Input(props) {
  const [options, setOptions] = useState([]);
  let [score, setScore] = useState(null);

  const getOptions = async (q_id) => {
    let os = await FetchOptions(q_id);
    setOptions(os);
  };

  useEffect(() => {
    getOptions(props.qId);
  }, [props.qId]);

  const handleValue = (e) => {
    setScore(parseFloat(e.target.value));
  };

  const response =
    score === null ? (
      <p>Please select one option!</p>
    ) : score === 10 ? (
      <p>Right answer!</p>
    ) : (
      <p>Wrong answer!</p>
    );
  console.log(response);
  return (
    <div>
      {response}
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
              onClick={handleValue}
            />
            <label htmlFor="track">{option.o_text}</label>
            <br />
          </div>
        );
      })}
    </div>
  );
}
