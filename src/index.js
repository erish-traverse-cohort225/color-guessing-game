import React from 'react';
import {useState, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//let numCorrect = 0;
//let numIncorrect = 0;

const App = () => {
    const [divText, setDivText] = useState('Start?')
    const [button1Text, setButton1Text] = useState('Start!');
    const [button2Text, setButton2Text] = useState('Start!!');
    const [button3Text, setButton3Text] = useState('Start!!!');
    const [divColor, setDivColor] = useState('#ffffff');

    //const [numCorrect, setNumCorrect] = useState(0);
    //const [numIncorrect, setNumIncorrect] = useState(0);

    const numCorrect = useRef(0)
    const numIncorrect = useRef(0)

    function randomizeColor() {
        const randomColors = Array.from({length: 3}, () => '#' + Math.floor(Math.random()*16777215).toString(16));
        const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];


        setDivColor(randomColor)
        setButton1Text(randomColors[0]);
        setButton2Text(randomColors[1]);
        setButton3Text(randomColors[2]);
    }

    async function handleClick(e) {
        if(e.target.innerHTML.includes("Start")){
            setDivText(e.target.innerHTML)
        } else if(e.target.innerHTML === divColor){
            //setNumCorrect(previous => previous + 1)
            numCorrect.current++
            setDivText(`Correct! ${numCorrect.current} / ${numIncorrect.current}`)
        } else if(e.target.innerHTML !== divColor) {
            //setNumIncorrect(previous => previous + 1)
            numIncorrect.current++
            setDivText(`Incorrect ${numCorrect.current} / ${numIncorrect.current}`)
        }
        randomizeColor()
    }

    return (
        <div className='container'>
            <div id='gameDiv' style={{backgroundColor: divColor}}>
                <div id='textDiv'>{divText}</div>
                <div id='buttonDiv'>
                    <button text={button1Text} onClick={e => handleClick(e)}>{button1Text}</button>
                    <button text={button2Text} onClick={e => handleClick(e)}>{button2Text}</button>
                    <button text={button3Text} onClick={e => handleClick(e)}>{button3Text}</button>
                </div>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);