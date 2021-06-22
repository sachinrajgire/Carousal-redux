import React, {useState} from 'react';
import {Data} from './Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icon'


const ImageSlider = ({slides}) => {
    const [curr, setCurr] = useState(0)
    const len = slides.length;

    const nextSlide = () => {
        setCurr(curr === len - 1 ? 0 : curr + 1);
      };
    
      const prevSlide = () => {
        setCurr(curr === 0 ? len- 1 : curr - 1);
      };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
      }

    return (

        <section className="slider">
            {/* {curr===0? 'right' : 'left'} */}
            <div className= "show">
            <button className="left" onClick={prevSlide}>⬅️</button>
                        <button className="right" onClick={nextSlide}>➡️</button>
            </div>
                        
            {Data.map((s, idx)=>{
                return(
                    <div
                    className={idx === curr ? 'slide active' : 'slide'}
                    key={idx}
                  >
                    {idx === curr && (
                      <img src={s.image} alt='travel image' className='image' />
                    )}
                  </div>
                )
            })}
        </section>
    )
}
console.log(typeof(Data))

export default ImageSlider
