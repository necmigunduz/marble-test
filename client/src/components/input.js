import React, { useEffect, useState } from "react";
import { FetchOptions } from "../api/fetchData";

export default function Input(props) {
  const [options, setOptions] = useState([]);

  const getOptions = async (q_id) => {
    let os = await FetchOptions(q_id);
    setOptions(os);
  };

  useEffect(() => {
    getOptions(props.qId);
  }, [props.qId]);

  const handleValue = (e) => {
    let answers =   document.querySelectorAll(`input[name='${e.target.name}']`);
    answers.forEach(answer => answer.disabled=true);
    props.total();
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
