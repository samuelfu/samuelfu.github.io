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

    'The company’s decision to relocate had a ________ effect on the local economy.':
    ['Profound', 'Paltry', 'Pernicious', 'Pellucid', 'Pliable'],

    'Her ________ interpretation of the poem shed new light on its meaning.':
    ['Nuanced', 'Noisome', 'Nascent', 'Nebulous', 'Nefarious'],

    'The detective’s ________ investigation revealed the truth behind the mysterious disappearance.':
    ['Meticulous', 'Mendacious', 'Munificent', 'Maudlin', 'Maladroit'],

    'His ________ laughter echoed through the room, lifting everyone’s spirits.':
    ['Contagious', 'Corpulent', 'Chimerical', 'Cacophonous', 'Capricious'],

    'The architect’s ________ design won accolades for its innovation.':
    ['Groundbreaking', 'Grandiloquent', 'Gregarious', 'Garrulous', 'Guttural'],

    'The CEO’s ________ decision inspired confidence in the company’s future.':
    ['Visionary', 'Voracious', 'Vapid', 'Venial', 'Vociferous'],

    'The team’s ________ effort in the tournament earned them the championship.':
    ['Exemplary', 'Exorbitant', 'Excoriating', 'Ephemeral', 'Elucidative'],

    'His ________ demeanor concealed the inner turmoil he was experiencing.':
    ['Serene', 'Soporific', 'Surreptitious', 'Sycophantic', 'Seditious'],

    'The artist’s ________ artwork left the critics divided in their opinions.':
    ['Provocative', 'Pernicious', 'Parsimonious', 'Precipitous', 'Pugnacious'],

    'Her ________ voice echoed in the empty hall, creating an eerie atmosphere.':
    ['Haunting', 'Histrionic', 'Harbinger', 'Heuristic', 'Hapless'],

    'The painting, though old, remained ________ despite its age.':
    ['Disheveled', 'Droll', 'Dismal', 'Dormant', 'Dilettante'],

    'His ________ behavior was evident in his untidy appearance.':
    ['Dowager', 'Dulcet', 'Dupe', 'Dolt', 'Discreet'],

    'The situation was so ________ that it left everyone in a state of disbelief.':
    ['Dubious', 'Dynamo', 'Ebullient', 'Earthenware', 'Elegy'],

    'Her eloquence and ________ captivated the audience during her speech.':
    ['Elicit', 'Elucidate', 'Eloquence', 'Egress', 'Ebb'],

    'The curious case posed an ________ puzzle for the investigators.':
    ['Enigma', 'Ensconce', 'Endearing', 'Enervate', 'Ephemeral'],

    'His ________ use of language made the story compelling and vivid.':
    ['Epicurean', 'Equivocate', 'Eradicate', 'Ergonomic', 'Evasive'],

    'The defendant\'s lawyer tried to ________ his client’s actions.':
    ['Expurgate', 'Extemporize', 'Extirpate', 'Extant', 'Expiate'],

    'The author’s ability to ________ emotions in his writing made his stories captivating.':
    ['Evoke', 'Euphemism', 'Esoteric', 'Ennui', 'Enfranchise'],

    'The speaker’s ________ knowledge on the subject was evident in his lecture.':
    ['Erudite', 'Erratic', 'Eradicate', 'Extemporize', 'Eviscerate'],

    'She tried to ________ her innocence by providing evidence.':
    ['Expiate', 'Expunge', 'Exscind', 'Extemporize', 'Excoriate'],

    'The author’s ________ style of writing left readers bewildered.': 
    ['Droll', 'Ebullient', 'Elocution', 'Eccentricity', 'Equivocation'],

    'The old artifact\'s ________ condition made it challenging to determine its origin.': 
    ['Disconcerting', 'Discreet', 'Disingenuous', 'Disparate', 'Disdainful'],

    'His ________ demeanor conveyed a sense of superiority.': 
    ['Disdainful', 'Disparaging', 'Dissembling', 'Dissident', 'Dormant'],

    'The unfamiliar terms used in the lecture were quite ________ to the audience.': 
    ['Enigmatic', 'Esoteric', 'Equivocal', 'Ephemeral', 'Euphoric'],

    'The actor’s ________ portrayal of the character earned him critical acclaim.': 
    ['Eloquent', 'Emaciated', 'Ephemeral', 'Exemplary', 'Enigmatic'],

    'Her ________ laughter echoed through the room, uplifting everyone’s spirits.': 
    ['Ebullient', 'Ephemeral', 'Equanimous', 'Eulogistic', 'Eviscerating'],

    'The constant uncertainty created an ________ atmosphere among the team members.': 
    ['Ephemeral', 'Enigmatic', 'Ebullient', 'Equivocal', 'Efficacious'],

    'The old ruins were ________ and barely recognizable.': 
    ['Dilapidated', 'Disheveled', 'Disconcerting', 'Disparaging', 'Disavowing'],

    'The speaker’s ________ remarks made everyone in the room laugh.': 
    ['Facetious', 'Flippant', 'Farcical', 'Fatuous', 'Ferocious'],

    'The relentless rain was ________ and showed no signs of stopping.': 
    ['Incessant', 'Inclement', 'Incisive', 'Inchoate', 'Ineffable'],

    'Their ________ behavior during the meeting reflected poorly on their professionalism.': 
    ['Indolent', 'Indigent', 'Indignant', 'Inimical', 'Insouciant'],

    'Her ________ personality drew people toward her effortlessly.': 
    ['Ingenuous', 'Ineffable', 'Inimitable', 'Insipid', 'Insolent'],

    'The old legend speaks of an ________ treasure hidden deep within the forest.': 
    ['Inscrutable', 'Ineluctable', 'Inane', 'Inchoate', 'Indelible'],

    'The tumultuous ________ was the result of years of political unrest.': 
    ['Insurrection', 'Incursion', 'Imprecation', 'Impetus', 'Inundation'],

    'The old building had an ________ sense of history attached to it.': 
    ['Indigenous', 'Inadvertent', 'Ineffable', 'Inexorable', 'Insular'],

    'Her ________ laughter could be heard echoing through the entire house.': 
    ['Incessant', 'Incriminating', 'Indelible', 'Inscrutable', 'Indolent'],

    'The novel’s ending was ________ and left readers pondering its meaning.': 
    ['Ineffable', 'Ineluctable', 'Inane', 'Indomitable', 'Inimical'],

    'The con artist attempted to ________ the unsuspecting tourists.': 
    ['Inveigle', 'Inculcate', 'Incite', 'Insinuate', 'Implore'],

    'The expedition faced an ________ storm that made travel impossible.': 
    ['Inexorable', 'Inimical', 'Inchoate', 'Inscrutable', 'Iniquitous'],

    'Her ________ attitude made it challenging for others to predict her reactions.': 
    ['Insouciant', 'Inscrutable', 'Inimical', 'Indolent', 'Indelible'],

    'The artist’s paintings were an ________ display of colors and shapes.': 
    ['Inimitable', 'Inscrutable', 'Ineffable', 'Ineluctable', 'Insipid'],

    'The novel contained an ________ chapter that felt out of place in the storyline.': 
    ['Inane', 'Indolent', 'Indigent', 'Ineffable', 'Insipid'],

    'The detective tried to unravel the ________ mysteries of the case.': 
    ['Inscrutable', 'Indolent', 'Ineluctable', 'Insidious', 'Ineffable'],

    'The political leader\'s ________ behavior caused uproar among the citizens.': 
    ['Inimical', 'Insidious', 'Inane', 'Indigent', 'Indolent'],

    'The chef’s ________ creation left the diners amazed by its exquisite taste.': 
    ['Innovative', 'Insidious', 'Inscrutable', 'Indolent', 'Inexorable'],

    'The teacher’s ________ teaching methods captivated the students’ interest.': 
    ['Innovative', 'Inscrutable', 'Inane', 'Ineffable', 'Insipid'],

    'The film’s ________ soundtrack added depth to the emotional scenes.': 
    ['Intricate', 'Inscrutable', 'Ineffable', 'Insipid', 'Inane'],

    'The salesman\'s ________ charm won over even the toughest customers.': 
    ['Irresistible', 'Inscrutable', 'Inane', 'Insipid', 'Ineffable'],

    'Her ________ speech resonated with hope and optimism.': 
    ['Inspiring', 'Inscrutable', 'Innovative', 'Insipid', 'Ineffable'],

    'The professor\'s ________ lecture series attracted students from various disciplines.': 
    ['Interdisciplinary', 'Ineffable', 'Inscrutable', 'Insipid', 'Inane'],

    'The spy’s ________ tactics enabled him to gather crucial information.': 
    ['Intricate', 'Insidious', 'Inscrutable', 'Innovative', 'Inane'],

    'The ________ landscape painting captured the essence of the countryside.': 
    ['Idyllic', 'Inscrutable', 'Ineffable', 'Insipid', 'Inane'],

    'Her ________ beauty was admired by everyone who met her.': 
    ['Ineffable', 'Insipid', 'Inscrutable', 'Indolent', 'Inane'],

    'The ________ scent of roses filled the garden.': 
    ['Intoxicating', 'Inscrutable', 'Ineffable', 'Insipid', 'Indolent'],

    'His ________ performance at the concert received a standing ovation.': 
    ['Incredible', 'Inscrutable', 'Ineffable', 'Insipid', 'Indolent'],

    'The architect designed an ________ building that was both functional and aesthetic.': 
    ['Innovative', 'Inscrutable', 'Inane', 'Ineffable', 'Insipid'],

    'The detective found a/an ________ clue that led to the criminal’s arrest.': 
    ['Incisive', 'Inscrutable', 'Ineffable', 'Insipid', 'Indolent'],

    'The artist’s ________ style of painting was unique and captivating.': 
    ['Innovative', 'Inscrutable', 'Inane', 'Ineffable', 'Insipid'],

    'The politician’s speech was filled with ________ promises that never materialized.': 
    ['Illusory', 'Inscrutable', 'Ineffable', 'Insipid', 'Inane'],

    'His ________ disregard for rules often got him into trouble.': 
    ['Flagrant', 'Inscrutable', 'Ineffable', 'Insipid', 'Inane'],

    'The musician’s ________ talent left the audience spellbound.': 
    ['Innate', 'Inscrutable', 'Ineffable', 'Insipid', 'Indolent'],

    'The artist’s ________ imagination was evident in every stroke of the brush.': 
    ['Infinite', 'Inscrutable', 'Ineffable', 'Insipid', 'Indolent'],

    'Her ________ presence commanded attention in any room.': 
    ['Inimitable', 'Inscrutable', 'Ineffable', 'Insipid', 'Indolent'],

    'The performer’s ________ skill on stage impressed everyone.': 
    ['Incredible', 'Inscrutable', 'Ineffable', 'Insipid', 'Indolent'],

    'The writer’s ________ command of language captivated readers.': 
    ['Inimitable', 'Inscrutable', 'Ineffable', 'Insipid', 'Indolent'],

    'The scientist made an ________ discovery that changed the field.': 
    ['Innovative', 'Inscrutable', 'Inane', 'Ineffable', 'Insipid'],

    'Her ________ kindness touched the hearts of many.': 
    ['Innate', 'Inscrutable', 'Ineffable', 'Insipid', 'Indolent'],

    'The athlete’s ________ determination led to multiple victories.': 
    ['Indomitable', 'Inscrutable', 'Ineffable', 'Insipid', 'Indolent'],

    'The artist’s ________ style of painting was bold and unconventional.': 
    ['Innovative', 'Inscrutable', 'Inane', 'Ineffable', 'Insipid'],

    'The detective used ________ tactics to solve the perplexing case.': 
    ['Innovative', 'Inscrutable', 'Inane', 'Ineffable', 'Insipid'],

    'The child’s ________ behavior often got him into trouble.': 
    ['Intractable', 'Irascible', 'Insipid', 'Irksome', 'Incendiary'],

    'His ________ remarks offended everyone in the room.': 
    ['Insolent', 'Ineffable', 'Ineluctable', 'Inchoate', 'Inimical'],

    'The speaker’s ________ voice filled the room with warmth.': 
    ['Mellifluous', 'Mendacious', 'Multifarious', 'Mawkish', 'Maladroit'],

    'The leader’s ________ decisions affected the entire organization.': 
    ['Meteoric', 'Mellifluous', 'Munificent', 'Miserly', 'Mawkish'],

    'Her ________ laughter echoed through the hall.': 
    ['Mellifluous', 'Munificent', 'Mirthful', 'Mawkish', 'Maladroit'],

    'His ________ mannerisms made him stand out in the crowd.': 
    ['Mawkish', 'Mirthful', 'Mellifluous', 'Maladroit', 'Munificent'],

    'The team faced an ________ challenge that required immediate attention.': 
    ['Onerous', 'Ostentatious', 'Obstreperous', 'Obliging', 'Ossified'],

    'The novel provided an ________ insight into the author’s life.': 
    ['Onerous', 'Ostensible', 'Obtuse', 'Ossified', 'Obliging'],

    'The chef’s ________ skill was evident in every dish.': 
    ['Palatable', 'Pernicious', 'Parsimonious', 'Pallid', 'Parsimonious'],

    'Her ________ behavior irked everyone in the office.': 
    ['Pernicious', 'Pallid', 'Palatable', 'Parsimonious', 'Placid'],

    'The company’s ________ growth impressed the investors.': 
    ['Pernicious', 'Palatable', 'Parsimonious', 'Paltry', 'Placid'],

    'The house had an ________ air, filled with a sense of foreboding.': 
    ['Ominous', 'Obtuse', 'Obstreperous', 'Onerous', 'Obliging'],

    'The movie’s ________ ending left the audience in tears.': 
    ['Poignant', 'Puerile', 'Punctilious', 'Petrifying', 'Pedantic'],

    'The ________ landscape was captured in the artist’s masterpiece.': 
    ['Picturesque', 'Plausible', 'Poignant', 'Petrifying', 'Pedantic'],


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
