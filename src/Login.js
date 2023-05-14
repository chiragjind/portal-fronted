import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


export const Login = () => {
  
  const handleSubmit = (mail) => {
        mail.preventDefault();
        // console.log(email);
        // setData(validate(inpval));
        // setIsSubmit(true);
    }


    const history=useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);
    // console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { name, value } = e.target;
        // console.log(value,name);

    setInpval( {
        
            ...inpval,
            [name]: value
        }
    )

}

   
    const addData = (e) => {
        e.preventDefault();

        history("/Home")
        const getuserArr = localStorage.getItem("chiragjindal");
        console.log(getuserArr);
        
        const {email,password} = inpval;

          if (email === "") {
                alert( "email field is requred!")
        } else if (!email.includes("@")) {
            alert( "@ field is requred!")
        }  else if (password === "") {
            alert( "password field is requred!")
        } else if (password.length < 5) {
            alert( "password length not match")
        } else {
            
            if (getuserArr && getuserArr.length) {
                 const userdata = JSON.parse(getuserArr);
                 const userlogin = userdata.filter((el,k) => {
                     return el.email === email && el.password === password
                });

              if (userlogin.length === 0) {
                     alert("invalid details")
                 } else {
                    console.log("user login succesfulyy");
                    localStorage.setItem("user_login", JSON.stringify(getuserArr))
                   history("/Home")

                    
                 }
            }

        }
     }

    //  const validate = (values)=>{
    //     const errors = {};
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //     const getuserArr = localStorage.getItem("chiragjindal");
    //     console.log(getuserArr);

    //     if (!values.email) {
    //         errors.email = "Email is required!";
    //     }else if (!regex.test(values.email)) {
    //         errors.email = "This is not a valid email format!";
    //     }
    //     if (!values.password) {
    //         errors.password = "Password is required";
    //     } else if (values.password.length < 4) {
    //         errors.password = "Password must be more than 4 characters";
    //     } else if (values.password.length > 10) {
    //         errors.password = "Password cannot exceed more than 10 characters";
    //     // } else{

    //     //     if (getuserArr && getuserArr.length) {
    //     //         const userdata = JSON.parse(getuserArr);
    //     //         const userlogin = userdata.filter((el,k) => {
    //     //             return el.email === email && el.password === password
    //     //        });

    //     //      if (userlogin.length === 0) {
    //     //             alert("invalid details")
    //     //         } else {
    //     //            console.log("user login succesfulyy");
    //     //            localStorage.setItem("user_login", JSON.stringify(getuserArr))
    //     //            history("/Home")

                   
    //     //         }
    //     //    }

    //     // }
    //     return errors;

    //  }
    // }
    

       

    return (
        <div className="auth-form-container App">
           
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">EMAIL</label>
                <input  onChange={getdata}type="email" placeholder="youremail@gmail.com" id="email" name="email" value={inpval.email}/>
                <label htmlFor="password">password</label>
                <input  onChange={getdata} type="password" placeholder="********" id="password" name="password" value={inpval.password}/>
                <button type="submit" onClick={addData}>Login</button>
            </form>
            <button className="link-btn">Don't have an account? <span><NavLink to="/Register">Register here.</NavLink></span></button>
        </div>
    )
}