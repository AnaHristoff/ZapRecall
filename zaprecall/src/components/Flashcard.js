import back from '../assets/img/back.png';

export default function Flashcard({ flashcardFront, setFlashcardFront, flashcardBack, setFlashcardBack }){
    

    return (
        <>
            <div className={flashcardFront}>
                <p className="question-number">{}/{}</p>
                <p className="question">{}</p>
                <img src={back} alt="back"/>
            </div>
            <div className={flashcardBack}>
                <div className="header-Flashcard">
                    <p></p>
                    <p className="header-question">{}</p>
                    <p className="question-number">{}/{}</p>
                </div>
                <p className="question">{}</p>
                <div className="buttons-answer">
                    <button className="black-button">I've just learnt it</button>
                    <button className="red-button">I didn't remerber</button>
                    <button className="green-button">I needed help to remember</button>
                    <button className="yellow-button">Zap!</button>
                </div>
            </div>
        </>
    );
}