import back from '../assets/img/back.png';
import happyFace from '../assets/img/happyFace.png';
import sadFace from '../assets/img/sadFace.png';
import { useState } from 'react';

export default function Flashcard({ index, flashcardFront, setFlashcardFront, flashcardBack, setFlashcardBack, question, setQuestion, answer, setAnswer, deckLenght, render, deck, setDeck, setLastPage, setBackgroundPage, setResultTitle, setResultMessage, setResultImg }){
    let [buttons, setButtons] = useState("buttons-answer");
    let [arrow, setArrow] = useState("hidden");

    function turnFlashcard(){
        setFlashcardFront("hidden");
        setFlashcardBack("flashcard-back"); 
        setButtons("buttons-answer");
        setArrow("hidden");
    }

    function selectAnswer(color){
        setFlashcardBack(flashcardBack + color);
        setButtons("hidden");
        setArrow("arrow");
        if(color == " yellow"){
            deck[index].zap = true;
        }
    }

    function nextFlashcard(){
        if(index === (deck.length - 1)){
            setLastPage("last-page");
            setBackgroundPage("hidden");
            if(checkZap()){
                setResultTitle("CONGRATULATIONS!");
                setResultMessage("You haven´t forgotten any flashcard!");
                setResultImg(happyFace);
            }else{
                setResultTitle("Putz...");
                setResultMessage("You have forgotten some flashcards... Don't give up! You can do it in the next try");
                setResultImg(sadFace);
            }
            
        }else{
            index++;
            deck[index - 1].render = "hidden";
            deck[index].render = "showing";
            setDeck(deck);
            setQuestion(deck[index].question);
            setAnswer(deck[index].answer);
            setFlashcardBack("hidden");
            setFlashcardFront("flashcard-front");
        }
    }

    function checkZap(){
        let zap = true;
        for(let i = 0; i < deck.length; i++){
            if(!deck[i].zap){
                zap=deck[i].zap;
                console.log(zap);
            }
        }
        return zap;
    }

    return (
        <div className={render}>
            <div className={flashcardFront}>
                <p className="question-number">{index + 1}/{deckLenght}</p>
                <p className="question">{question}</p>
                <p className='arrow' onClick={turnFlashcard}><img src={back} alt="back"/></p>
            </div>
            <div className={flashcardBack}>
                <div className="header-Flashcard">
                    <p></p>
                    <p className="header-question">{question}</p>
                    <p className="question-number">{index + 1}/{deckLenght}</p>
                </div>
                <p className="answer">{answer}</p>
                <div className={buttons}>
                    <button className="black button" onClick={() => selectAnswer(" black")}>I've just learnt it</button>
                    <button className="red button" onClick={() => selectAnswer(" red")}>I didn't remerber</button>
                    <button className="green button" onClick={() => selectAnswer(" green")}>I needed help to remember</button>
                    <button className="yellow button" onClick={() => selectAnswer(" yellow")}>Zap!</button>
                </div>
                <p className={arrow} onClick={nextFlashcard}><img src={back} alt="back"/></p>
            </div>
        </div>
    );
}