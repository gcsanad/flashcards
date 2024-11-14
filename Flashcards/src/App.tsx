import { useEffect, useState } from "react"
import FlashcardList from "./components/FlashcardList"
import { FlashcardType } from "./components/type/type"
import { sampleData } from "./components/data/data"
import "./app.css"

function App() {

  const [flashCards, setFlashcards] = useState<FlashcardType[]>(sampleData)

  const fetchQuestions = async()=>{
    try{
      const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    if(!response.ok){
      throw new Error;
    }
      const data = await response.json()
      console.log(data)
      if(data.results.length>0){
        setFlashcards(data.results)

      }
    }
    catch(error)
    {
      console.error('Error: ',error)
    }

  }

  useEffect(()=>{
    fetchQuestions()
  },[])

  return (


    <div className="container">
      <FlashcardList flashcards={flashCards}></FlashcardList>
    </div>
  )
}

export default App
