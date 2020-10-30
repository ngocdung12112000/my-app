import React, { useState } from 'react';


export default function App(){
    const questions = [
		{
			questionText: 'Hiện nay Mark Zuckerberg 31 tuổi , 9 năm nữa tuổi anh ấy gấp đôi tuổi em gái mình hiện tại . Hỏi bây giờ tuổi em gái Mark là bao nhiêu ?',
			answerOptions: [
				{ answerText: '13', isCorrect: false },
				{ answerText: '11', isCorrect: true },
				{ answerText: '20', isCorrect: false },
				{ answerText: '17', isCorrect: false },
			],
		},
		{
			questionText: 'Trong một bức ảnh có ba thế hệ của một gia đình, trong đó có hai người cha, hai người con. Hỏi tấm ảnh này có ít nhất mấy người?',
			answerOptions: [
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '4', isCorrect: false },
				{ answerText: '5', isCorrect: false },
			],
		},
		{
            questionText: 'Bốn người đào hai cái hố hết 2 giờ. Hỏi một người đào trong 2 giờ được mấy cái hố?',
			answerOptions: [
				{ answerText: '1', isCorrect: true },
				{ answerText: '1/2', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '4', isCorrect: false },
			],
		},
		{
			questionText: 'Harry Potters có bao nhiêu phần?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
    ];
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionsClick = (isCorrect) => {
        if(isCorrect){
            setScore(score + 1);
        }
        

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }
        else {
            setShowScore(true);
        }
    };

    return(
    <div>
        <div className="title">
            <h1>Quizz App</h1>
        </div>
        <div className = "app">
            {showScore ? (
                <div className="score-section">
                    Your score is: {score}/{questions.length}
                </div>
            ):(
                <>
                    
                    <div className="question-section">
                        <div className='question-count'>
                            <span>Question {currentQuestion+1}/{questions.length} </span>
                        </div>
                        <div className="question-text"> {questions[currentQuestion].questionText} </div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].answerOptions.map((answerOptions) => (
                            <button onClick={() => handleAnswerOptionsClick(answerOptions.isCorrect)}>
                                {answerOptions.answerText}
                            </button>
                        ) )}
                    </div>
                </>
            )
            }
        </div>
    </div>
        
    );
}
