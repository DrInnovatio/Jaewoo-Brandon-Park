import React, {useState} from 'react';
import "./corousel.css";
import ImgComp from "./ImgComp";
import i1 from "../images/ChowNow.png"
import i2 from "../images/crowd.png"
import i3 from "../images/NewRelic.png"
import i4 from "../images/pound.png"

function Carousel() {
  const [x, setX] = useState(0);
  let sliderArr = [<ImgComp src={i1}/>,<ImgComp src={i2}/>,<ImgComp src={i3}/>,<ImgComp src={i4}/>];

  const goLeft = () => {
      x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArr.map((item, index) => {
          return(
            <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
              {item}
            </div>
          );
        })}
        <button id="goLeft" onClick={goLeft}><i class="fas fa-angle-double-left"></i></button>
        <button id="goRight" onClick={goRight}><i class="fas fa-angle-double-right"></i></button>
    </div>
  )  
}

export default Carousel;