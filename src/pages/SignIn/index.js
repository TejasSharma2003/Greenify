import { useState } from "react";
import Heading from "../../components/Heading";
import "./index.scss";
import { createUser, signin } from '../../auth/helper'
import { useNavigate } from "react-router-dom";

import hank from "../../assets/blog-author.jpg";

const SignIn = () => {
  const navigate = useNavigate();

  const [isSignIn, setIsSignIn] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: '',
    password: "",
    phoneNumber: null,
    address: ''
  })


  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setForm(pre => {
      return { ...pre, [name]: value }
    })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { name, email, password, phoneNumber, address } = form;
    if (isSignIn) {
      try
      {
        const res = await createUser({ name, email, password, phoneNumber, address });
        console.log(res);
        navigate('/');
      }catch(err)
      {
        console.log(err);
      }
    }
    else {
      try
      {
        const res = await signin({ email, password });
        console.log(res)
        navigate('/');
      }catch(err)
      {
        console.log(err);

      }
    }

  }

  const onSignInHandler = () => {
    setIsSignIn(true);
  };

  const onLogInHandler = () => {
    setIsSignIn(false);
  };

  return (
    <div className="signup">
      <Heading>Welcome you Greenify,Biyaach</Heading>
      <div className="signup__container">
        <div>
          <div className="form__switch">
            <span
              onClick={onSignInHandler}
              className={`form__tab ${isSignIn && "form__tab--active"}`}
            >
              Sign up
            </span>
            <span
              onClick={onLogInHandler}
              className={`form__tab ${!isSignIn && "form__tab--active"}`}
            >
              Login in
            </span>
          </div>
          <form onSubmit={onSubmitHandler} className="signup__form">
            {isSignIn && (
              <input
                onChange={onChangeHandler}
                className="signup__input"
                type="text"
                name="name"
                placeholder="Enter your Name"
              />
            )}
            <input
              onChange={onChangeHandler}
              className="signup__input"
              type="email"
              name="email"
              placeholder="Enter your Email"
            />
            <input
              onChange={onChangeHandler}
              className="signup__input"
              type="password"
              name="password"
              placeholder="Enter your Password"
            />
            {isSignIn ? (
              <>
                <input
                  onChange={onChangeHandler}
                  className="signup__input"
                  type="number"
                  name="phoneNumber"
                  placeholder="Enter your Phone number"
                />
                <input
                  onChange={onChangeHandler}
                  className="signup__input"
                  type="text"
                  name="address"
                  placeholder="Enter your Address"
                />
              </>
            ) : (
              ""
            )}
            <button type="submit" className="signup__btn">
              {isSignIn ? "Create account" : "Login me in"}
            </button>
          </form>
        </div>

        <div className="signup__pic-container">
          <span className="signup__punch-line">
            Secure your account like a DEA agent with Hank's sign up page.
          </span>
          <img src={hank} alt="hank" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
