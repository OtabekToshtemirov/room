import {data} from './data.js';

import './App.css'
import Header from './Components/Header.jsx'
import Slider from './Components/Slider.jsx'
import Lowersection from './Components/Lowersection.jsx'
import {useState} from "react";

function App() {
    const [current, setCurrent] = useState(0);
    const length = data.length

    const [isOpen, setIsOpen] = useState(false)
    const handleLeftButtonClick = () => {
        setCurrent((current - 1 + length) % length);
    };

    const handleRightButtonClick = () => {
        setCurrent((current + 1) % length);
    };

  return (
    <>
        <Header
         isOpen={isOpen}
         setIsOpen={setIsOpen}
         rightClick={handleRightButtonClick}
         leftClick={handleLeftButtonClick}
         data={data}
         current={current}
        />
        <Slider
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            rightClick={handleRightButtonClick}
            leftClick={handleLeftButtonClick}
            data={data}
            current={current}
        />
        <Lowersection />

    </>
  )
}

export default App
