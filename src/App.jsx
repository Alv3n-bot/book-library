import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Main from "./components/Main"
const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f6f6] text-gray-900">
      <Header />
      <Main />
      <Footer />
      
    </div>
  );
};

export default App;
