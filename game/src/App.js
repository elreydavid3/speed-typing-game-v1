import React, { useState, useEffect, useRef } from 'react'

function App(){
    const STARTING_TIME = 10
    
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME) 
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)   
    const inputRef = useRef(null)
    
    //each time the user types in the textarea, handleChange is triggered, and it sets the previous value of text in state to what is now is state, therefore it is constantly updating state in real time with each character typed in the textarea just like in react forms.
    const handleChange = (event) => {
        const {value} = event.target
        setText(value)
    }
    
    // the text parameter here does not refer to state
    const calculateWordCount = (text) => {
        //trim disregards the spaces at the beginning and the end of the string, so it doesn't count empty spaces at the beginning and end of string as words.
        //the split array method splits all characters (words) that are divided by spaces and places them in the new array as individual indices
        const wordsArr = text.trim().split(" ")
        //since the array would return 1 word for a completely empty textarea, we filter through all of the words and only return the ones that are not equal to a empty string
        const filteredWords = wordsArr.filter(word => word !== " ")
        return filteredWords.length
    }


    //here  I set up an effect that runs every time the 'timeRemaining' or 'isTimeRunning' changes. The effect waits one second, then decrements the 'timeRemaining' by 1
    //each time timeRemaining is changed a callback function calls setTimeout. setTimeout contains the parameter of 'setTimeRemainder' and 1000ms (1second). The setTimeRemainder decrements the previous timeRemainder by 1. 
    //once the timeRemainder is decremented by one (changes) useEffect is triggered and runs again, thus decrementing it again and again in an infinite loop until we hit 0.
    useEffect(() => {
        if(isTimeRunning === true && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
            //when the timer hits zero
        } else if(timeRemaining === 0) {
           endGame()
        }
    }, [timeRemaining, isTimeRunning])

    function startGame (){
        setText("")
        setTimeRemaining(STARTING_TIME)
        setIsTimeRunning(true)
        setWordCount(0)
        inputRef.current.disabled = false
        inputRef.current.focus()
    }

    function endGame () {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
    }
    
    return(
        <div>
            
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
                ref={inputRef}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            {/*the  reason we use a callback function on this button is because we have to pass the text arguement from state as a param in setIsTimeRunning  */}
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}





export default App