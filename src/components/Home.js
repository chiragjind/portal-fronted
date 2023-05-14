import React from 'react'
import './Home.css';


import growth from './images/growthimg.jpg';

import untittiled3 from './images/untittled3.jpg';
import manages from './images/management.jpg';
import research from './images/Research-projects16.jpg';
import { useNavigate } from 'react-router-dom';


export default function Home() {
   
  const navigate=useNavigate();
   
  const gotomanage=()=>{
    navigate("/About")
  }
  const gotoresearch=()=>{
    navigate("/Project2")
  }
  const gotoindustry=()=>{
    navigate("/Project3")
  }
  return (
   <>
      <div className="container ">
      <div className="row justify-content-evenly pt-3 pb-3">
            <div className="col-md-3 text-center mt-5 ">
              <h1>  <i className="bi bi-code text-primary  "></i></h1>
              <h2>Management project</h2>
              <img src={manages} class="d-block w-100" alt="..."/>
              <p className='mt-3 pt-5'><b className='sizze'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint saepe praesentium aut expedita, nemo assumenda ex nulla temporibus et!</b></p>
              <button class="btn btn-danger" type="submit" onClick={gotomanage}>Register here</button>
            </div>
            <div className="col-md-3 text-center mt-5 ">
               <h1> <i className="bi bi-easel-fill text-danger"></i></h1>
               <h2>Research project</h2>
               <img src={research} class="d-block w-100" alt="..."/>
               <p className='mt-3 pt-5 '> <b className='sizze'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint saepe praesentium aut expedita, nemo assumenda ex nulla temporibus et!</b></p>
               <button class="btn btn-info" type="submit" onClick={gotoresearch}>Register here</button>
            </div>
            <div className="col-md-3 text-center mt-5 ">
                <h1><i className="bi bi-calendar-check text-success"></i></h1>
                <h2>Industry project</h2>
                <img src={untittiled3} class="d-block w-100" alt="..."/>
                <p className='mt-3 pt-5'> <b className='sizze'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint saepe praesentium aut expedita, nemo assumenda ex nulla temporibus et!</b></p>
                <button class="btn btn-info" type="submit" onClick={gotoindustry}>Register here</button>
            </div>
        </div>

        <div className="row justify-content-evenly pt-3 pb-3">
        <div className="col-md-5 pt-3">
            <img src={growth} className="img-fluid" alt=""/>
        </div>
        <div className="col-md-5 pt-13">
            <h5 className="mt-3">PROJECT 1</h5>
            <div className="progress pro1" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-success" ></div>
              </div>
              <h5 className="mt-3 ">PROJECT 2</h5>
              <div className="progress pro2" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-info" ></div>
              </div>
              <h5 className="mt-3">PROJECT 3</h5>
              <div className="progress pro3" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar bg-warning" ></div>
              </div>
              
        </div>5
      </div>


   </div>
   {/* </div> */}

   </>
  )
}
