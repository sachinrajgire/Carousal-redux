import React, { Component } from 'react';
import {Data} from './Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
//import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icon'


class ImageSlider extends Component {

  // constructor (props) {
  //   super(props)
  //   this.state ={
  //      curr:0,
  //    }
  // }

  
  // nextSlide = () => {
  //   let len = this.props.slides.length;
  //   const {curr} = this.state

  //   this.setState({curr:curr === 0 ? 0 : curr + 1})
    
  // };
  
  // prevSlide = () => {
  //   let len = this.props.slides.length;
  //     const {curr} = this.state
  //       // setCurr(curr === 0 ? len- 1 : curr - 1);
  //       this.setState({curr:curr === 0 ? len- 1 : curr - 1})
  //     };

  render() {
console.log(this.props ,'THIS>PROPS ')

    // const {curr} = this.state
    const {curr} = this.props
    let len = Data.length
    return (

      <section className="slider">
          <div className= "show">
          <button className="left" onClick={()=>this.props.slideLeft(len)}>⬅️</button>
          <button className="right" onClick={()=>this.props.slideRight(len)}>➡️</button>
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
}
const mapStateToProps = (state) => {
  console.log(state ,'state');
  return {
    curr: state.slideControl.curr,
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  slideRight:(len)=>dispatch({type: 'SLIDE_RIGHT', payload:{totalImages:len}}),
  slideLeft:(len)=>dispatch({type: 'SLIDE_LEFT', payload:{totalImages:len}}),

}
} 
export default connect(mapStateToProps, mapDispatchToProps)(ImageSlider)



