import Logo from './Logo';
import Flashcard from './Flashcard';
import { useState } from 'react';

export default function BackgroundPage({ backgroundPage, setBackgroundPage, logoClass }){
    let [flashcardFront, setFlashcardFront] = useState("flashcard-front");
    let [flashcardBack, setFlashcardBack] = useState("hidden");

    return (
        <div className={backgroundPage}>
            <Logo logoClass={logoClass}/>
            <Flashcard 
                flashcardFront={flashcardFront}
                setFlashcardFront={setFlashcardFront}
                flashcardBack={flashcardBack}
                setFlashcardBack={setFlashcardBack}
            />
        </div>
    );
}