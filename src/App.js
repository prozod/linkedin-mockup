import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="app">
        <div className="app__body">
          <Sidebar />
          {/* Feed */}
          {/* Widgets */}
        </div>
      </div>
    </div>
  );
}

export default App;
