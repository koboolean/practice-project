import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Results from "./components/Results.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdenti, newValue){
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdenti]: +newValue,
            }
        });
    }

    return (
        <>
          <Header />
            <main>
                <UserInput onChange={handleChange} userInput={userInput}/>
                {!inputIsValid && <p className="center">투자 기한은 1 미만일 수 없습니다.</p>}
                {inputIsValid && <Results userInput={userInput}/>}
            </main>
        </>
    )
}

export default App
