import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [score, setScore] = useState("");
  const [ratings, setRatings] = useState([{ title: "Eze is a boy", score: 8 }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    // setRatings((oldRatings) => setRatings({ ...oldRatings, title, score }));
  };

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <ul>
        {ratings &&
          ratings.map((rating) => (
            <li key={rating.title}>
              {rating.title} : {rating.score}
            </li>
          ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='number'
          name='score'
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <input type='submit' value='Submit' />p
      </form>
    </div>
  );
}

export default App;
