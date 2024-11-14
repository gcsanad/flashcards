import { useState } from "react"
import { FlashcardType } from "./type/type"

type flashcardProps={
    flashcard:FlashcardType
}

const Flashcard = ({flashcard}:flashcardProps) => {

    const [flip, setFlip] = useState(false);

  return (
    <div onClick={()=>setFlip(!flip)} className={`card ${flip ? "flip":""}`}>
        <div className="front">
            {flashcard.question}
        </div>
        <div className="back">
            {flashcard.correct_answer}
        </div>
    </div>
  )
}

export default Flashcard