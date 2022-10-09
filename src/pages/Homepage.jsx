import React from 'react'
import headerImage from './../images/header3.png'
import Typed from 'react-typed'
import ParticlesFile from '../components/Particles'
import { useState, useEffect, useRef } from 'react'
import Data from '../components/data'
import {AiFillPlusCircle} from 'react-icons/ai'
import {AiFillMinusCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'


  
const Homepage = () => {
    const [showParticles, setShowParticles] = useState(false);
    const[clicked, setClicked] = useState(false);
    const[clickedTwo, setClickedTwo] = useState(false);
    const [popup, setPopup] = useState(false);
    const modalRef = useRef();

    const toggle = (id) =>{
        if(clicked===id){
            return setClicked(null)
        }
         setClicked(id)
    }
    const toggleTwo = (id) =>{
        if(clickedTwo===id){
            return setClickedTwo(null)
        }
         setClickedTwo(id)
    }
    useEffect(() => {
        setTimeout(() => {
          setShowParticles(true);
        }, 500);
      }, []);
      useEffect(()=>{
          document.addEventListener('mousedown', (event)=>{
              if (!modalRef.current.contains(event.target)){
                  setPopup(false)
              }
          })
      })

    return (
        <div>
         {/*------------------------------------Header-------------------------------------*/}
          <section id="header">
           <img className='header-image' src={headerImage} alt="" />
           <div className='info'>
            <h1 className='main-info'>Web Design & development</h1>
            <Typed
            className='typed-text'
            strings={['Expert in HTML and CSS', 
            'Intermediate in Bootstrap, Javascript & React',
            'Basic knowhow of NodeJS, Express & MongoDB',
            'A front-End React developer, who can design any website'
            ]} 
            typeSpeed={40}
            backSpeed={20}
            loop
            />
            <p><button className='btn-header' onClick={()=>setPopup(true)}>Hire Me</button></p>
         </div> 
         {showParticles && (
              <ParticlesFile/>
         )}
         </section>
        {/*------------------------------------Experience/about-me-------------------------------------*/}    
        <section id='about-me'>
            <h2>{Data[0].title}<span style={{color: '#EFC139'}}> Me </span></h2>
            <h2>{Data[0].subtitle} <span style={{color: '#EFC139'}}>Having Diverse Experience </span> </h2>
            <p style={{color: '#191E34', textAlign:'justify'}}>{Data[0].desc[0]}</p>  
            <p style={{color: '#191E34', textAlign:'justify'}}>{Data[0].desc[1]}</p> 
            <p style={{color: '#191E34', textAlign:'justify'}}>{Data[0].desc[2]}</p>   
        <div className="row justify-content-center">  
        {Data.slice(1,4).map((card)=>(
        <div className="col-lg-4 col-md-6 col-sm-12">
         <div className="card experience-card">
            <div className="card-body">
                <h4 className="card-title">{card.title}</h4>
                <p className="card-text text-light">{card.desc}</p>
            </div>
          </div>
          </div> 
          ))}
         </div> 
         </section>
        
   
{/*------------------------------------Portfolio-------------------------------------*/}
<section id='portfolio'>
   <div className="portfolio-heading">
       <h2>{Data[4].title} <span style={{color:'white'}}>folio</span></h2>
       <p>{Data[4].desc}</p>
   </div>
   <div className="row"> 
   {Data.slice(5,11).map((portfolio)=>(
    <div className="col-lg-4 col-md-6 col-sm-12">
         <a href={portfolio.url} target="_blank" className="portfolio-card">  
         <div className="image-div">
         <img className='portfolio-image' src={portfolio.img} alt="" />
         </div>
         <p>{portfolio.caption}</p>
         </a>   
 
     </div>
       ))}
    </div>
</section>
{/*------------------------------------Expectations-------------------------------------*/}
<section id='expectations'>
  <div className="expectations-heading">
     <h2 className="expectations-heading-part"> <span style={{color:'#EFC139'}}>Expect</span>{Data[11].title}</h2>
     <p className="expectations-heading-part">{Data[11].desc}</p>
  </div>  
  <div className="expectations-wrapper">
    <div className="expectations-card" id='expectations-card1'>
      <h4 className="top-card-expecations" style={{color: 'white'}}>{Data[12].title}</h4> 
      <p style={{color: 'white'}}>{Data[12].desc}</p>
      {Data.slice(13,18).map((expectations,id)=> 
      (
       <div className="accordian py-2"> 
       <h6 key={expectations.id}>{expectations.title}
       <span onClick={()=>toggle(id)}style={{float:'right',marginRight: '2%'}}>
        {clicked===id ? <AiFillMinusCircle className='icons'/> : <AiFillPlusCircle className='icons'/> }</span></h6>
       {clicked ===id ? (<p>{expectations.desc}</p>):null}
       </div>
       ))}
    </div>
    <div className="expectations-card" id='expectations-card2'>
    <h4 className="top-card-expecations" style={{color: 'white'}}>{Data[18].title}</h4> 
      <p style={{color: 'white'}}>{Data[18].desc}</p>
      {Data.slice(19,24).map((expect,id)=>
      (
       <div className="accordian py-2"> 
       <h6 key={expect.id}>{expect.title}
       <span onClick={()=>toggleTwo(id)}style={{float:'right',marginRight: '2%'}}>
        {clickedTwo===id ? <AiFillMinusCircle className='icons'/> : <AiFillPlusCircle className='icons'/> }</span></h6>
       {clickedTwo ===id ? (<p>{expect.desc}</p>):null}
       </div>
       ))}
    </div>
  </div> 
</section>
{/*-----------------------------------------------popup-----------------------------*/}
<div className='popup-up'  style={{visibility: popup ? 'visible' : 'hidden'}}>
            <form ref={modalRef} action="https://formsubmit.co/asim.nustian@hotmail.com" method="POST" className='popup'>
            <label>
                Name:<br/>
            <input type="text" name="name" required style={{marginRight: '2%'}}/>
            </label>
            <br/>
            <label>
                Email: <br/>
            <input type="email" name="email"required/>
            </label>            
            <br/>
            <label> 
            Subject: <br/>
            <select name="cars" id="cars" form="carform">
            <option>Hire</option>
            <option>Joint Venture</option>
            <option>Other query</option>
            </select>
            </label>
            <br/>
            
            <label> 
                Your Message:<br/>
            <textarea name='textarea' style={{width:'350px', height:'100px'}}/>
            </label>
            <br/>
             <input type="hidden" name="_next" value="http://asimiftikhar.com/thankyou"/>
            <button type="submit" className='px-2 py-1' style={{background:'#191E34', color:'white'}}>Send</button>
             </form>
             </div>
             
</div>

 )
}

export default Homepage
