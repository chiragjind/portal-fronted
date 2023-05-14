import React from "react";
import { useState , useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Register = () => {
   

    const handleSubmit = (e) => {
        e.preventDefault();
        setData(validate(inpval));
        setIsSubmit(true);
         }
    const history=useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [data,setData] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    

    const getdata = (e) => {
        const { name , value } = e.target;

        setInpval({...inpval, [name]: value })

    }

    
  useEffect(() => {
    console.log(data);
    if (Object.keys(data).length === 0 && isSubmit) {
        console.log(data);
        localStorage.setItem("chiragjindal",JSON.stringify([...data,inpval]));
        history("/Home")
      }
}, [data]);

const validate = (values) => {
    const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.name) {
    errors.name = "Username is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
  }
  if (!values.password) {
      errors.password = "Password is required";
  } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
  }
  return errors;
};
    

    // const addData = (e) => {
    //     e.preventDefault();
    //     console.log("hello");
        
    //     const {name,email,password} = inpval;

    //     if (name === "") {
    //         alert( "name field is requred!");
    //         } else if (email === "") {
    //             alert( "email field is requred!")
    //     } else if (!email.includes("@")) {
    //         alert( "@ field is requred!")
    //     }  else if (password === "") {
    //         alert( "password field is requred!")
    //     } else if (password.length < 5) {
    //         alert( "password length not match")
    //     } else {
    //         console.log("data added succesfully");
    //         history("/login")
    //         localStorage.setItem("chiragjindal",JSON.stringify([...data,inpval]));

    //     }

    // }

    // const initalValues = { name: "", email: "", password: ""};
    // const {formValues,setFormvalues} = useState(initalValues);

    // const getdata = (e) => {
    //     console.log(e.target);
    // }
    return (
        <div className="auth-form-container App">
             {Object.keys(data).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre className="text-dark text-opacity-75 ">{JSON.stringify(data, undefined, 2)}</pre>
        // alert(JSON.stringify(data, undefined, 2))
      )}

            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input  name="name"  onChange={getdata} id="name" placeholder="full Name" type="text" value={inpval.name}/>
            <label htmlFor="email">email</label>
            <input  onChange={getdata}type="email" placeholder="youremail@gmail.com" id="email" name="email" value={inpval.email} />
            <label htmlFor="password">password</label>
            <input  onChange={getdata} type="password" placeholder="********" id="password" name="password" value={inpval.password} />
            <button type="submit" >Log In</button>
        </form>
        <button className="link-btn" >Already have an account? <span> <NavLink to="/Login"> Login here.</NavLink></span> </button>
    </div>
    )
}