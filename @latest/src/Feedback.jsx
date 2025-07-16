import { useState } from "react";

import { FaStar } from "react-icons/fa";

const numOfStar = 5;
function Feedback(props) {
  // state changes
  const [selected, setSelected] = useState(0);
  const [hover, setHover] = useState(null);
  //actual feed back
  return (
    <div className="feedback">
      <h2>We'd love your feedback</h2>
      <h4>
        Let us know what you think about our website or products — your opinion
        helps us improve and serve you better.
        <br />
      </h4>

      <div className="feedback-Stars">
        {[...Array(numOfStar)].map((_, i) => {
          return (
            <FaStar
              key={i}
              onClick={() => setSelected(i + 1)}
              onMouseEnter={() => setHover(i + 1)}
              onMouseLeave={() => setHover(null)}
              color={
                hover !== null
                  ? i + 1 <= hover
                    ? "#ffc107" // 1st condition true → yellow on hover
                    : "#e4e5e9" // 1st condition false → gray on hover
                  : i + 1 <= selected
                  ? "#ffc107" // Not hovering, but selected → yellow
                  : "#e4e5e9" // Not hovering and not selected → gray
              }
              style={{ cursor: "pointer", transition: "color 0.3s ease" }}
            />
          );
        })}
      </div>

      <div className="feedback-form">
        <textarea
          className="feedback-form"
          placeholder="Your feedback here..."
        />
        <button className="feedback-form-button">Submit</button>
      </div>

      <p>Thank you for your feedback!</p>
    </div>
  );
}

export default Feedback;
