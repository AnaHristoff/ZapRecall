import Logo from './Logo';
import Flashcard from './Flashcard';
import { useState } from 'react';

export default function BackgroundPage({ backgroundPage, setBackgroundPage, logoClass, setLastPage, setResultTitle, setResultMessage, setResultImg }){
    const decks = [
        {
            question: "What is JSX?",
            answer:"It is a syntax extension to JavaScript",
            render: "showing",
            zap: false
        },
        {
            question: "What is React?",
            answer:"React is a JavaScript library. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike",
            render: "hidden",
            zap: false
        },
        {
            question: "We must initialize components with ___",
            answer:"Capital letters",
            render: "hidden",
            zap: false
        },
        {
            question: "We can use ___ inside of the JSX",
            answer:"expressions",
            render: "hidden",
            zap: false
        },
        {
            question: "ReactDOM helps us ___ ",
            answer:"interacting with the DOM so we can use React components in it.",
            render: "hidden",
            zap: false
        },
        {
            question: "We use npm __ ",
            answer:"To manage the necessary packages and its dependencies.",
            render: "hidden",
            zap: false
        },
        {
            question: "We use props __ ",
            answer:"To pass different information into React components.",
            render: "hidden",
            zap: false
        },
        {
            question: "We use state __",
            answer:"To warn React about wich information must be renderized again on screen.",
            render: "hidden",
            zap: false
        }
    ];
    let [deck, setDeck] = useState(decks);
    let [flashcardFront, setFlashcardFront] = useState("flashcard-front");
    let [flashcardBack, setFlashcardBack] = useState("hidden");
    let [question, setQuestion] = useState(deck[0].question);
    let [answer, setAnswer] = useState(deck[0].answer);
    
    return (
        <div className={backgroundPage}>
            <Logo logoClass={logoClass}/>
            {deck.map(i => 
                <Flashcard 
                index={deck.indexOf(i)}
                flashcardFront={flashcardFront}
                setFlashcardFront={setFlashcardFront}
                flashcardBack={flashcardBack}
                setFlashcardBack={setFlashcardBack}
                question={i.question}
                setQuestion={setQuestion}
                answer={i.answer}
                setAnswer={setAnswer}
                deckLenght={deck.length}
                render={i.render}
                deck={deck}
                setDeck={setDeck}
                setLastPage={setLastPage}
                setBackgroundPage={setBackgroundPage}
                setResultTitle={setResultTitle}
                setResultMessage={setResultMessage}
                setResultImg={setResultImg}
            />)}
        </div>
    );
}