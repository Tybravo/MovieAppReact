import { React, useState } from "react";
import style from "../styles/signup.module.css";
import CustomButton from "../reusables/CustomButton";
import { Link , useNavigate} from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const userDetails = {
    username: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(userDetails);

  function handleChange(event){
    const {name, value} = event.target
    //setData((prevData)=>({...prevData, [name]:value}));
    setData((prevData)=>{
      return {...prevData, [name]: value}
    });
  };
  console.log(data)
    

  const handleSubmit = () =>{
    console.log("Submitted......");
    //setTimeout(()=>{
      navigate("/login")
    //}, 2000)
  }


return (
  <body class ={style.signupBackground}>
      <div class={style.center_box}>
          <div class={style.signuptitle}
          >Film App Sign Up
          </div>
              <div class={style.signup_box}>
                  <form  onSubmit={handleSubmit} action="">
                      <div>
                      <input
                          type="text"
                          name="username"
                          placeholder=" Enter Username"
                          className={style.input}
                          onChange = {handleChange}
                          required
                      />
                      </div>
                      <div>
                      <input
                          type="text"
                          name="email"
                          placeholder=" Enter Email"
                          className="input"
                          required
                      />
                      </div>
                      <div>
                      <input
                          type="password"
                          name="password"
                          placeholder=" Enter Password"
                          className="input"
                          required
                      />
                      </div>
                      <CustomButton style={style.btn} type="submit" textContent="submit"/>
                  </form>
              </div>   
              <div class={style.own_account}>
                  <span>Already have an account?</span>
                  <span><Link class={style.nonedeco} to={'/login'}> Login</Link></span>
              </div> 
        </div>
      {/* </div> */}
  </body>
);
};

export default SignUp;
