import React from 'react'
import './Project2.css';
import Nature from './images/Nature.avif';
import pro2 from './images/pror2.webp';
import Snow from './images/Snow.avif';
import Desert from './images/photo.avif';
import { useNavigate } from 'react-router-dom';


export default function Project2() {

    const home=useNavigate();

    const gotohome=()=>{
        home("/Home");
    }

  return (
    <>

<section className="background firstsection">
        <div className="box_main">
            <div className="firsthalf">
                <p className="text_big">THE FUTURE OF INDIA</p>
                <p className="text_small">THE FUTURE OF INDIA Lorem, Lorem, ipsum dolor sit amet con alias, harum sint repudiandae veniam voluptatum. Perferendis voluptates fugiat itaque nihil!</p>
                
                <div className="buttonsection">
                    <button className="btn"><a href="https://itc.gymkhana.iitb.ac.in">SUBCRIBE</a></button>
                    <button className="btn"><a href="https://itc.gymkhana.iitb.ac.in/clubs">video watch</a></button>
                </div>
            </div>
            <div className="secondhalf">
                <img className="image" style={{zIndex:-1}} src={Nature} alt="pic i dont know"/>
            </div>
        </div>
    </section>

    <section className="section">
        <div className="paras">
        <p className="sectiontag text_big">Measuring gamma-ray bursts' clues about the evolution of the universe</p>
        <p className="sectionsubtag text_small">Lorem Lorem ipsum dolor sit amet, conseolestias. Illum repellendus provident, voluptate fugit quo, id perspiciatis quasi non deserunt doloribus in nostrum recusandae voluptatum!

        </p>
        <div className="buttonsectioN read">
            <button className="btn"><a href="https://itc.gymkhana.iitb.ac.in">Read more</a></button>
            <button className="btn"><a href="https://itc.gymkhana.iitb.ac.in">video watch</a></button>
        </div>
    </div>
        <div className="thumbnail">
            <img src={pro2} alt="snow image" className="imgfluid" />
        </div>
    </section>

    <section className="section section-left">
        <div className="paras">
        <p className="sectiontag text_big">Glaciers are melting much faster than expected, study finds</p>
        <p className="sectionsubtag text_small">Lorem Lorem ipsum dolor sit amet, ernatur re Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati tempora tempore expedita repudiandae perferendis repellat vel necessitatibus inventore sed.
        </p>
        <div className="buttonsection read">
            <button className="btn"><a href="https://itc.gymkhana.iitb.ac.in">Read more</a></button>
            <button className="btn"><a href="https://itc.gymkhana.iitb.ac.in">video watch</a></button>
        </div>
    </div>
        <div className="thumbnail">
            <img src={Snow} alt="snow image" className="imgfluids"/>
        </div>
    </section>

    <section className="section">
        <div className="paras">
        <p className="sectiontag text_big">US heatwave: Deserts burn in triple-digit temperatures </p>
        <p className="sectionsubtag text_small">Lorem Lorem iaerat doloribus repellendus minima laborum soluta ducimus corrupti nam excepturi totam autem, animi deserunt, dolore neque! Labore deserunt corporis blanditiis tenetur quidem eaque velit, asperiores architecto molestias. Illum repellendus provident, voluptate fugit quo, id perspiciatis quasi non deserunt doloribus in nostrum recusandae voluptatum!

        </p>
        <div className="buttonsection read">
            <button className="btn"><a href="https://itc.gymkhana.iitb.ac.in">Read more</a></button>
            <button className="btn"><a href="https://twitter.com/devcom_iitb?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">video watch</a></button>
        </div>
    </div>
        <div className="thumbnail">
            <img src={Desert} alt="snow image" className="imgfluid"/>
        </div>
    </section>

    <section className="contact">
        <h2 className="text-centre">contact us</h2>
        <div className="form">
            <input className ="form-input" type="text" name="name" id="name" placeholder="enter your name"/>
            <input className ="form-input" type="number" name="phone" id="phone" placeholder="enter your phone number"/>
            <input className ="form-input" type="email" name="email" id="email" placeholder="enter your email"/>
            <input className ="form-input" type="text" name="query" id="query" placeholder="enter your query"/>
            <textarea className="form-input" name="text" id="text" cols="30" rows="10" placeholder="ellaborate your concern"></textarea>
            <button className="btn btn-dark" onClick={gotohome}>Back to home page</button>
        </div>

    </section>

    <footer className="footerbackground">
        <p className="text-footer">   
             Copyright &copy;2027-All rights reserved;
        </p>
    
    </footer>

     
    </>
  )
}
