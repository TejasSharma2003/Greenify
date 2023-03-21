import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Info from "./pages/info";
import AOS from "aos";
import Articles from "./pages/Articles";
import PrivateRoute from './auth/helper/PrivateRoute'
import "aos/dist/aos.css";
import SignIn from "./pages/SignIn";

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/info/:name" element={<Info />} />

      </Routes>
    </div>
  );
};

export default App;
