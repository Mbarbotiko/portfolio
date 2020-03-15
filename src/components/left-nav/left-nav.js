import React from 'react';
import './left-nav.scss';
import arrow from '../images/component-images/arrow.png';
import projects from '../../data/projects';



class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index:0,
      bgColor:'activeNav'
    }
  }

  activeNavForwards = () => {
    var active = document.querySelectorAll('.activeNav')[0];
    active.classList.remove('activeNav');
    let newIndex = this.state.index;
    newIndex++
    var dots = document.querySelectorAll('.dot-nav');
    if (newIndex === dots.length) {
      newIndex = 0;
    }
   
     dots[newIndex].classList.add('activeNav');


    this.setState(
      {
        index: newIndex
      }
    )

  }
  activeNavBackwards = () => {
    var active = document.querySelectorAll('.activeNav')[0];
    active.classList.remove('activeNav');
    let newIndex = this.state.index;
    var dots = document.querySelectorAll('.dot-nav');
    newIndex--
    if (newIndex === -1) {
      newIndex = dots.length-1;
    }
   

     dots[newIndex].classList.add('activeNav');


    this.setState(
      {
        index: newIndex
      }
    )

  }


render(){
  return (
    <div className='left-nav'>
      <div><img id='up' src={arrow} onClick={this.activeNavBackwards}/></div>
      {/* <div className={`dot-nav ${this.state.bgColor}`}></div>
      <div className='dot-nav'></div>
      <div className='dot-nav'></div>
      <div className='dot-nav'></div> */}
      {projects.map((i, item)=>{
        console.log(item, i)
        if(projects.i===0){
          console.log('within i')
          return <div className={`dot-nav ${this.state.bgColor}`}></div>
        }else{
          return <div className='dot-nav'></div>
        }
     

      })}
      <div><img id='down' src={arrow} onClick={this.activeNavForwards} /></div>
    </div>
  )

}
// function LeftNav(props) {
//   return (
//     <div className='left-nav'>
//       <div><img id='up' src={arrow} /></div>
//       <div className='dot-nav'></div>
//       <div className='dot-nav'></div>
//       <div className='dot-nav'></div>
//       <div className='dot-nav'></div>
//       <div><img id='down' src={arrow} /></div>
//     </div>
//   );
// }

}


export default LeftNav;
