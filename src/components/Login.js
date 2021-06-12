import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./Firebase";
import "./Login.css";
import { login } from "../features/userSlice";
import LinkedInTextLogo from "../icons/LinkedInLoginLogo.svg";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [profilePicture, setProfilePicture] = useState();
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePicture,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                url: profilePicture,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };
  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profilePicture: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img src={LinkedInTextLogo} alt="LinkedIn" />
      <p className="login__motto">
        Make the most out of your professional life.
      </p>

      <div className="login__formcontainer">
        <form>
          <label htmlFor="email address">Email address</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password (6 or more characters)</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="name">Full Name (e.g.: John Smith)</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Only required if registering a new account."
          />
          <label htmlFor="profilepicture">Profile picture URL (optional)</label>
          <input
            type="text"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
            placeholder="Only required if registering a new account."
          />

          <p>
            By clicking Sign In, you agree to the LinkedIn{" "}
            <span> User Agreement</span>,<span> Privacy Policy</span>, and
            <span> Cookie Policy</span>.
          </p>

          <button type="submit" onClick={loginToApp}>
            Sign In
          </button>
        </form>

        <p>
          Not a member?{" "}
          <span className="login__register" onClick={register}>
            Register now
          </span>
        </p>
      </div>
      <div className="dummy__accounts">
        <p>
          If you don't want to create your own account, you can use the
          <span> demo accounts</span> provided below.
        </p>
        <div className="dummy__separation"></div>
        <div className="dummy__logins">
          <p>
            <span>mark@gmail.com — </span> 123456
          </p>
          <p>
            <span>jessica@gmail.com — </span> 123456
          </p>
          <p>
            <span>craig@gmail.com — </span> 123456
          </p>
        </div>
        <div className="dummy__separation"></div>

        <p className="builtby">
          Built by <a href="https://andreaswolff.net"> Andreas Wolff</a>
        </p>
      </div>
      {props.children}
    </div>
  );
}

export default Login;
