import React from "react";
import Management from "./images/management1.webp";
import Hotelmanage from "./images/Hotel manage.jpg";
import Hotelmanage2 from "./images/Event mangement.jpg";
import Hotelmanage3 from "./images/disaster-management.jpg";
import { useNavigate } from "react-router-dom";


export default function About() {

  const history=useNavigate();

  const goback=()=>{
          
         history('/Home');
  }
  return (
    <>
      <div className="container-fluid" style={{backgroundColor: "black",color:"white"}} >
        <div className="row justify-content-evenly pt-3 pb-3">
          <div className="col-md-10 text-center mt-3 ">
            <h1>
              {" "}
              <i className="bi bi-code text-primary "></i>
            </h1>
            <h2>hellooo</h2>
            <img src={Management} className="d-block w-100" alt="..." />
            <p className="mt-3 pt-5">
              <b>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit sint saepe praesentium aut expedita, nemo
                assumenda ex nulla temporibus et!
              </b>
            </p>

           
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-evenly pt-3 pb-3">
          <div className="col-md-3 text-center mt-3  ">
            
            <h2 className="pb-2"> Hotel Management</h2>
            <div className="card">
              <img src={Hotelmanage} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  </div>
          </div>
          <div className="col-md-3 text-center mt-3  ">
          <h2 className="pb-2"> Event Management</h2>
            <div className="card">
              <img src={Hotelmanage2} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  </div>
            

          </div>
          <div className="col-md-3 text-center mt-3  ">
          <h2 className="pb-2"> Disaster Manage</h2>
            <div className="card">
              <img src={Hotelmanage3} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  </div>
          </div>
        </div>

   </div>

   <div className="d-grid gap-2 col-5 mx-auto">
  <button className="btn btn-outline-primary mb-3" type="button" onClick={goback}>click here to go back</button>
  
</div>

   <div className="container-fluid">
      <div className="row bg-secondary text-whhite text-center p-2">
    <div className="col-md-12">
        copyright 1999-2023 by web convership
    </div>
   </div>
   </div>

    </>
  );
}
