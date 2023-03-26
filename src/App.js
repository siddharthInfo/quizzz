import React,{useState} from 'react'

function App() {
   const questions = [{
         questionText:'what is the capital of india?',answerOption:[{answerText:'New Delhi',isCorrect:true},
         {answerText:'new York',isCorrect:false},{answerText:'kabul',isCorrect:false},{answerText:'hanoi',isCorrect:false},],
   },
   {questionText:'Cristiano ronaldo plays what game?',answerOption:[{answerText:'Football',isCorrect:true},
   {answerText:'cricket',isCorrect:false},{answerText:'hockey',isCorrect:false},{answerText:'basketball',isCorrect:false},],
},];

const [showScore,setShowScore]=useState(false);
const [currentQuestion,setCurrentQuestion]=useState(0);
const [score, setScore]=useState(0);
function onHandle(isCorrect){
   if(isCorrect===true)
   {
      setScore(score + 1);
   }
  
  const nextQuestion = currentQuestion + 1;
  if(nextQuestion<questions.length)
  {
    setCurrentQuestion(nextQuestion)
  }
  else{
  return setShowScore(true);
}
}

  return (
    <div className='App'>
      {showScore ? (<div className="score-section">You Score {score} out of {questions.length}</div>):
      (<div className="question-section">
        <div classNmae='question-count'><span>Question 1</span> out of  {questions.length}</div>
        <div classNmae="question-Text">{questions[currentQuestion].questionText}</div>
        <div className='answer-section'>{questions[currentQuestion].answerOption.map((n)=>(
          <button onClick={()=>onHandle(n.isCorrect)}>{n.answerText}</button>
        ))}</div>
      </div>)}
    </div>
  )
}

export default App
