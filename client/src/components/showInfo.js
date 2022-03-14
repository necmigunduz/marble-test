const ShowInfo = (props) => {
  return (
    <div className="card p-2 bg-danger text-white mx-5">
      <div className="card-body border bg-dark">
      <h1 className="card-title text-light fw-bold">Score</h1>
      <p className="card-text">You scored {props.score} out of 50.</p>
      <button className="btn btn-light text-dark fw-bold" onClick={() => window.location.reload(false)}>Restart the quiz</button>
      </div>
    </div>
  );
};

export default ShowInfo;
