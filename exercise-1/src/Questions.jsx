import { useState } from "react";

const Questions = ({ questions }) => {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id);
  }

  return questions.map((q) => (
    <li
      className={selectedId === q.id ? "list selected" : "list"}
      key={q.id}
      onClick={() => handleClick(q.id)}
    >
      {selectedId === q.id ? q.answer : q.question}
    </li>
  ));
};

export default Questions;
