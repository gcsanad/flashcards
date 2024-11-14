import Flashcard from "./Flashcard"
import { FlashcardType } from "./type/type"

type flashcardListProps={
    flashcards:FlashcardType[]
}


const FlashcardList = ({flashcards}:flashcardListProps) => {
  return (
    <div className="card-grid">
        {flashcards.map(flashcard=>(
            <Flashcard flashcard = {flashcard}/>
        ))}
    </div>
  )
}

export default FlashcardList