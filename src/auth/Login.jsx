import React,  {useState } from "react";
import style from '../styles/login.module.css';
import CustomButton from '../reusables/CustomButton';
import { Link } from "react-router-dom";


const Login = () =>{
  const userDetails = {
      email: "",
      password: "",
    };
  
    const [data, setData] = useState(userDetails);
  
    function handleChange(event){
      const {name, value} = event.target
      //setData((prevData))=>({...prevData, [name]:value}));
      setData((prevData)=>{
        return {...prevData, [name]: value}
      })
    }
  
    return (
      <body class ={style.loginBackground}>
        <div class={style.center_box}>
              <div class={style.logintitle}
              >Film App Login
              </div>
                  <div class={style.login_box}>
                    <form action="">
                      <div>
                        <input
                          type="text"
                          name="email"
                          placeholder="Enter Your Email"
                          className={style.input}
                          onChange = {handleChange}
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter your Password"
                          className={style.input}
                          onChange = {handleChange}
                        required
                        />
                      </div>
                      <CustomButton style={style.btn} type="submit" textContent="Login"/>
                    </form>
                    </div>
                  <div class={style.no_account}>
                    <span>Have no account?</span>
                    <span><Link class={style.nonedeco} to={'/signup'}>  Sign Up </Link></span>
                  </div>
              </div>
          </body>
    );
    }
    
    export default Login
    