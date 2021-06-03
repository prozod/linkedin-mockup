import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login";
import { auth } from "./components/Firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            url: userAuth.photoURL,
          })
        );
      } else {
        //user logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div>
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <div className="app__body">
            <Sidebar />
            <Feed />
            {/* Widgets */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
