import "./App.css";
import Questions from "./Questions";

const questions = [
  {
    id: 3457,
    question: "When mn daw ko mi chat saimo biii?",
    answer: "Sept. 30 , 2021 - Thursday - 5:40pm",
  },
  {
    id: 7336,
    question: "Unsa mn daw akong first chat hmmm?",
    answer: "Hi guys",
  },
  {
    id: 8832,
    question: "When mn daw ko first gekilig baby? ",
    answer: "taga mag beb ka AHHAHAHAHHAHAH👩‍❤️‍👨",
  },
  {
    id: 1297,
    question: "What is my favourite food?",
    answer: "wrongg hahah dili chicken kay chicken🐔 mn jd HAHAHH",
  },
  {
    id: 9103,
    question:
      "If atung first date kay sa pagahan beach of the world asa mn daw ang ika 2? hmm",
    answer: "National PASEO of Iligan 😄",
  },
  {
    id: 2002,
    question: " korney or dili? sa last rani e click",
    answer: "if dili chat ug i hate u if yes iloveyou  HAHHAHAHA",
  },
];

function FlashCards() {
  return (
    <>
      <div>
        <h1>Hello my home 🏠</h1>
        <ol className="container">
          <Questions questions={questions} />
        </ol>
      </div>
    </>
  );
}

export default FlashCards;
