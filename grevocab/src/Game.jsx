import { useState, useEffect } from "react";
import "./Game.css";

const cardAnswers = {
    'The student used an ancient ________ to perform arithmetic calculations.': 
    ['Abacus', 'Augury', 'Aversion', 'Aseptic', 'Asperse'],

    'Her headache began to ________ after taking the painkiller.': 
    ['Abate', 'Aberration', 'Alacrity', 'Belligerent', 'Bilge'],

    'The king’s ________ of the throne shocked the entire kingdom.': 
    ['Abdication', 'Abeyance', 'Abhor', 'Abjure', 'Ascribe'],

    'The sudden appearance of the rare bird was an ________ in this region.': 
    ['Aberration', 'Augury', 'Ascetic', 'Aversion', 'Aplomb'],

    'He decided to ________ his friend in cheating during the exam.': 
    ['Abet', 'Abrogate', 'Ascend', 'Auspicious', 'Augment'],

    'The project is in ________, awaiting the approval of the board.': 
    ['Abeyance', 'Acclaimed', 'Aversion', 'Astringent', 'Atonement'],

    'She could not help but ________ the smell of rotten eggs.': 
    ['Abhor', 'Amortize', 'Ascend', 'Abridge', 'Avert'],

    'Despite the hardships, she continued to ________ by her principles.': 
    ['Abide', 'Ascertain', 'Admonitory', 'Ascribe', 'Alleviate'],

    'He was forced to ________ his allegiance to the secret society.': 
    ['Abjure', 'Adorn', 'Abrogate', 'Abridge', 'Accolade'],

    'The old painting was ________ in several places due to its age.': 
    ['Abraded', 'Alloy', 'Auspicious', 'Allegiance', 'Amalgamate'],

    'Her laughter was ________, echoing through the empty room.':
    ['Contagious', 'Augmented', 'Diminished', 'Derided', 'Daunted'],

    'The politician faced a wave of ________ from the opposing party after his controversial statement.':
    ['Censure', 'Commiseration', 'Cohesion', 'Cajoling', 'Concord'],

    'His ________ use of metaphors added depth to his poetry.':
    ['Evocative', 'Desultory', 'Decorous', 'Discerning', 'Deferential'],

    'The CEO’s ________ decision had a far-reaching impact on the company.':
    ['Momentous', 'Cryptic', 'Cursory', 'Churlish', 'Craven'],

    'The artist’s ________ brushstrokes added a sense of dynamism to the painting.':
    ['Fluid', 'Fraught', 'Fervent', 'Facetious', 'Fulsome'],

    'Her ________ behavior during the crisis surprised everyone who knew her.':
    ['Stoic', 'Sycophantic', 'Scrupulous', 'Subversive', 'Salubrious'],

    'The team’s ________ effort to meet the deadline resulted in a high-quality product.':
    ['Concerted', 'Contentious', 'Curtail', 'Convoke', 'Circumvent'],

    'The diplomat’s attempt to ________ the conflict was met with skepticism from both sides.':
    ['Mediate', 'Mollify', 'Mandate', 'Malinger', 'Mendicant'],

    'Her ________ use of language made her stories appealing to a wide audience.':
    ['Vivid', 'Vitriolic', 'Veracious', 'Vexing', 'Venal'],

    // Add more questions here...
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
  setSelectedAnswer,
  correctAnswerSelected,
  setCorrectAnswerSelected,
) {
  console.log(`Clicked: ${answer}`);
  if (correctAnswerSelected) {
    setCorrectAnswerSelected(false);
    setSelectedAnswer(null);
    const rand = Math.floor(Math.random() * keysArray.length)
    setNewPrompt(rand);
    return;
  }

  if (answer != cardAnswers[prompt][0]) {
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

  useEffect(() => {
    // When prompt changes, update shuffledList
    setShuffledList(shuffleList(cardAnswers[prompt]));
  }, [prompt]);

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
                setSelectedAnswer,
                correctAnswerSelected,
                setCorrectAnswerSelected,
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
