import React, { PureComponent, Component } from 'react';
import {Data} from './Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import { SLIDE_RIGHT } from '../Redux/ActionTypes/actiontypes';
import {slideRight, fetchPosts,setLoadingToTrue,setLoadingToFalse} from '../Redux/Actions/actions';
import CircularProgress from '@material-ui/core/CircularProgress';

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
componentDidMount () {
    this.props.fetchPosts()
}


  render() {

    const {curr ,isLoading,posts} = this.props
    if(isLoading) {
      return <CircularProgress />
    }
    let len = Data.length
    return (
<div>
      <section className="slider">
          <div className= "show">
          <button className="left" onClick={()=>this.props.slideLeft(len)}>⬅️</button><button className="right" onClick={()=>this.props.slideRight(len)}>➡️</button>
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
      <div>
      
      </div>
      </div>  
  )
  }
}
const mapStateToProps = (state) => {
  return {
    curr: state.slideControl.curr,
    isLoading: state.slideControl.isLoading,
    posts: state.slideControl.posts,
    
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  slideRight:(len)=>dispatch(slideRight(len)),
  slideLeft:(len)=>dispatch({type: 'SLIDE_LEFT', payload:{totalImages:len}}),
  fetchPosts:()=>dispatch(fetchPosts()),
  setLoadingToTrue:()=>dispatch(setLoadingToTrue()),

}
} 
export default connect(mapStateToProps, mapDispatchToProps)(ImageSlider)



