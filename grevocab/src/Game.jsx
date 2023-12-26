import { useState } from "react";
import "./Game.css";

const cardAnswers = {
  "The twins' heredity and upbringing were identical in nearly every respect, yet one child remained unfailingly sanguine even in times of stress while her sister was prone to angry outbursts that indicated an exceptionally choleric ________.":
    ["temperament", "genotype", "environment", "physiognomy", "incarnation"],
  "The writer's ability to ________ various literary styles allowed her to adapt her voice to different genres with ease.":
    ["assimilate", "imitate", "emulate", "eschew", "propagate"],
  "The scientist’s groundbreaking discovery led to a ________ in our understanding of the universe.":
    ["paradigm shift", "consensus", "continuum", "hypothesis", "speculation"],
  "Her tireless dedication to her work earned her ________ among her peers.": [
    "acclaim",
    "ambiguity",
    "adversity",
    "antagonism",
    "apathy",
  ],
  "The committee reached a ________ on the issue after hours of heated debate.":
    ["compromise", "consensus", "disparity", "polarization", "impasse"],
  "The politician’s speech was filled with ________ promises that seemed unlikely to ever be fulfilled.":
    ["specious", "valid", "plausible", "cogent", "fallacious"],
  "The novel’s ________ language painted a vivid picture of the protagonist’s emotions.":
    ["eloquent", "obtuse", "cryptic", "vague", "laconic"],
  "Her penchant for being ________ in her explanations often left her students confused.":
    ["ambiguous", "clear", "precise", "obscure", "convoluted"],
  "Despite facing numerous obstacles, she remained ________ in her pursuit of becoming a doctor.":
    ["resolute", "vacillating", "fickle", "capricious", "tenacious"],
  "The company’s decision to downsize was met with ________ from its employees.":
    ["resistance", "acquiescence", "compliance", "submission", "rebellion"],
  "The artist’s ________ use of color conveyed a sense of melancholy in the painting.":
    ["subtle", "blatant", "overt", "manifest", "hidden"],
  "The professor’s lectures were ________, often leaving students feeling confused and overwhelmed.":
    ["abstruse", "comprehensible", "intelligible", "lucid", "ambiguous"],
  "The diplomat’s efforts to ________ peace in the region were lauded by international leaders.":
    ["foster", "stifle", "suppress", "quell", "provoke"],
  "His ________ demeanor made it difficult for others to discern his true emotions.":
    ["inscrutable", "transparent", "obvious", "clear", "intelligible"],
  "The team’s ________ in the championship game was a result of rigorous training and strategic planning.":
    ["triumph", "defeat", "conquest", "victory", "loss"],
  "The lawyer’s ________ argument swayed the jury in favor of his client.": [
    "compelling",
    "weak",
    "ineffective",
    "unconvincing",
    "persuasive",
  ],
  "Her ________ personality made her the life of every party.": [
    "gregarious",
    "reclusive",
    "introverted",
    "reserved",
    "solitary",
  ],
  "The professor’s ________ comments sparked a lively debate among the students.":
    ["provocative", "inoffensive", "benign", "innocuous", "stimulating"],
  "The project’s ________ success was due to the collaborative efforts of the entire team.":
    ["tremendous", "mediocre", "average", "modest", "exceptional"],
  "His ________ attitude made it challenging for him to form lasting relationships.":
    ["aloof", "approachable", "friendly", "sociable", "outgoing"],
  "The artist’s ________ brushstrokes added depth and texture to the painting.":
    ["fluid", "rigid", "inflexible", "solid", "stiff"],
  "Her speech was filled with ________ language, making it difficult for many in the audience to understand.":
    ["esoteric", "common", "mundane", "obvious", "general"],
  "The coach’s ________ leadership style inspired his team to achieve great success.":
    ["charismatic", "dull", "bland", "uninspiring", "dynamic"],
  "The project’s ________ was evident from its meticulous planning and flawless execution.":
    ["efficacy", "failure", "ineffectiveness", "weakness", "incompetence"],
  "The author’s ________ writing style captivated readers and critics alike.": [
    "engaging",
    "boring",
    "uninteresting",
    "dull",
    "tedious",
  ],
  "The company’s decision to cut corners ultimately led to ________ products.":
    ["substandard", "excellent", "high-quality", "superior", "top-notch"],
  "The student’s ________ performance in class resulted in her receiving the scholarship.":
    ["stellar", "mediocre", "average", "ordinary", "unsatisfactory"],
  "The CEO’s ________ decision-making skills steered the company toward profitability.":
    ["astute", "foolish", "unwise", "reckless", "careless"],
  "His ________ appearance made it difficult to believe he was a renowned scientist.":
    ["unassuming", "arrogant", "pretentious", "ostentatious", "grandiose"],
  "The team’s ________ cooperation led to the successful completion of the project.":
    ["seamless", "disjointed", "disconnected", "broken", "fragmented"],
  "The professor’s lectures were often ________, leaving students feeling inspired and motivated.":
    ["inspiring", "dull", "boring", "uninteresting", "tedious"],
  "The CEO’s ________ leadership brought stability and growth to the company.":
    ["effective", "ineffective", "inefficient", "unproductive", "successful"],
  "The defendant’s ________ alibi convinced the jury of his innocence.": [
    "airtight",
    "flawed",
    "weak",
    "inadequate",
    "questionable",
  ],
  "His ________ demeanor made it easy for people to approach him.": [
    "approachable",
    "aloof",
    "distant",
    "unfriendly",
    "reserved",
  ],
  "The team’s ________ efforts resulted in a breakthrough in medical research.":
    ["collaborative", "individual", "solo", "isolated", "uncooperative"],
  "The writer’s ________ prose resonated with readers on a profound level.": [
    "lyrical",
    "technical",
    "mechanical",
    "plain",
    "simple",
  ],
};

function shuffleList(original_list) {
  let list = original_list.slice();
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

// Extract keys into an array
const keysArray = Object.keys(cardAnswers);

function handleAnswerClick(
  prompt,
  answer,
  setNewPrompt,
  selectedAnswer,
  setSelectedAnswer,
  correctAnswerSelected,
  setCorrectAnswerSelected,
  setShuffledList
) {
  console.log(`Clicked: ${answer}`);
  if (correctAnswerSelected) {
    setCorrectAnswerSelected(false);
    setSelectedAnswer(null);
    return;
  }

  if (selectedAnswer == null || answer != cardAnswers[prompt][0]) {
    setSelectedAnswer(answer);
  } else {
    setSelectedAnswer(answer);
    setCorrectAnswerSelected(true);
  }
}

function Card({ prompt, setNewPrompt }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffledList, setShuffledList] = useState(
    shuffleList(cardAnswers[prompt])
  );
  const [correctAnswerSelected, setCorrectAnswerSelected] = useState(false);
  console.log(selectedAnswer);
  console.log(
    cardAnswers[prompt][0] === selectedAnswer ? "correct" : "incorrect"
  );
  return (
    <div className="card">
      <div className="prompt">{prompt}</div>
      <ul className="answer">
        {shuffledList.map((answer, index) => (
          <li
            key={answer}
            className={
              cardAnswers[prompt][0] === selectedAnswer &&
              selectedAnswer === answer
                ? "correct"
                : "incorrect"
            }
            onClick={() =>
              handleAnswerClick(
                prompt,
                answer,
                setNewPrompt,
                selectedAnswer,
                setSelectedAnswer,
                correctAnswerSelected,
                setCorrectAnswerSelected,
                setShuffledList
              )
            }
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Game() {
  // store the state for whether cards are answered
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * keysArray.length)
  );

  // Use the random index to get a random key
  const randomKey = keysArray[randomIndex];

  return (
    <div>
      <Card prompt={randomKey} setNewPrompt={setRandomIndex} />
    </div>
  );
}

export default Game;
