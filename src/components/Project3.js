import React from 'react'
import './Project3.css';
import Thread from './images/Indus1.jpg';
import House from './images/House.jpg';
import Robotic from './images/robot1.jpg';
import Women from './images/Women-image.jpg';
import Boss from './images/Boss.jpg';
import Cohead from './images/Co-head.jpg';
import { useNavigate } from 'react-router-dom';
export default function Project3() {
    
    const home=useNavigate();

    const gotohome=()=>{
        home("/Home");
    }
  return (
    <>
    <div className='bgimg'>

        <div className='container text-center hearderset text-danger'>
            <h2>welcome to our studio!</h2>
            <h1> IT's NICE TO MEET YOU</h1>
            

        </div>
    </div>
    <section className='container ourservice text-center'>
        <h1> SERVICE</h1>
        <p> lorem dbjkd smn bhzj mBJMd bdshmB nmds</p>

        <div className='row rowsetting'>
            <div className='col-md-4 d-block m-auto '>
                <div className=' imgsetting d-block m-auto bg-warning'>
                    <i className='fa fa-shopping-cart fa-3x text-white'></i>
                   </div>
                   <h2> E-commerce</h2>
                   <p>n todays modern business world, its no longer necessary for consumers to travel to a brick-and-mortar store to make their purchases</p>
                   
            </div>
            <div className='col-md-4 d-block m-auto '>
                <div className=' imgsetting d-block m-auto bg-warning'>
                    <i className='fa fa-desktop fa-3x text-white'></i>
                   </div>
                   <h2> Responsive Design</h2>
                   <p>n todays modern business world, its no longer necessary for consumers to travel to a brick-and-mortar store to make their purchases</p>

            </div>
            <div className='col-md-4 d-block m-auto '>
                <div className=' imgsetting d-block m-auto bg-warning'>
                    <i className='fa fa-lock fa-3x text-white'></i>
                   </div>
                   <h2> Web security</h2>
                   <p>n todays modern business world, its no longer necessary for consumers to travel to a brick-and-mortar store to make their purchases.</p>

            </div>
        </div>

        </section>

        <section className='portfolio bg-light'>
            <div className='container text-center'>
                <h1>Portfolio</h1>
                <p>lorem ipsum dolor sit met consection gyhutj huyg </p>
              <div className='row'>
                <div className='col-md-4 col-12 d-bolck m-auto'>
                     <div className='card'>
                        <img src={Thread} className="card-img img-fluid"/>
                           <div className='card-body'>
                            <h2 className='card-title'>Car industry</h2>
                            <p className='card-text'>The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, </p>

                           </div>
                        
                     </div>
                </div>
                <div className='col-md-4 col-12 d-bolck m-auto'>
                     <div className='card'>
                        <img src={House} className="card-img img-fluid"/>
                           <div className='card-body'>
                            <h2 className='card-title'>Architech</h2>
                            <p className='card-text'>Architects are professionals trained in the art and science of building design.</p>

                           </div>
                        
                     </div>
                </div>
                <div className='col-md-4 col-12 d-bolck m-auto'>
                     <div className='card'>
                        <img src={Robotic} className="card-img img-fluid"/>
                           <div className='card-body'>
                            <h2 className='card-title'>Robotics</h2>
                            <p className='card-text'>A robot is a machine—especially one programmable by a computer—capable of carrying out a complex series of actions automatically.</p>

                           </div>
                        
                     </div>
                </div>


              </div>

            </div>
        </section>

        <section className='ourteam'>
            <div className='container text-center'>
                <h1>OUR AMAZING TEAM</h1>
                <p>lorm ipsum dolor sit met consetctuionhg</p>
                <div className='row teammsetting'>
                    <div className='col-lg-4 col-12'>
                        <figure className='figure'>
                            <img src={Women} class="figure-img img-fluid rounded-circle dims" /> 
                            <figcaption>
                                <h4>key Gardland</h4>
                                <p className='figure-caption'>Lead engineer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <figure className='figure'>
                            <img src={Boss} class="figure-img img-fluid rounded-circle dims" /> 
                            <figcaption>
                                <h4>Tommy john</h4>
                                <p className='figure-caption'>Head engineer</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <figure className='figure'>
                            <img src={Cohead} class="figure-img img-fluid rounded-circle dims" /> 
                            <figcaption>
                                <h4>Ricardo Paul</h4>
                                <p className='figure-caption'>Co-head engineer</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <button className="btn btn-dark" onClick={gotohome}>Back to home page</button>
            </div>

        </section>

        <footer className="footer">
        <h6 className="text-center">Copyright &copy;2027-All rights reserved;</h6>
        </footer>
    </>
  )
}
