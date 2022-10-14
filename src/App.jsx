import { useState } from "react";
import "./App.css";
import Testimonial from "./components/Testimonial";
import Photo1 from "./images/profile1.jpg";
import Photo2 from "./images/profile2.jpg";
import Photo3 from "./images/profile3.jpg";
import Button from "./components/Button";

function App() {
  const [theme, setTheme] = useState("light");
  function onClickFn() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className={"main-container " + theme}>
      <Button
        onClickFn={onClickFn}
        value={theme == "dark" ? "light" : "dark"}
      />
      <Testimonial
        img={Photo1}
        onClickFn
        name="Juana Pérez"
        stars="⭐⭐⭐"
        text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor"
      />

      <Testimonial
        img={Photo2}
        name="John Nash"
        stars="⭐⭐⭐⭐⭐"
        text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor"
      />

      <Testimonial
        img={Photo3}
        name="Dr Brown"
        stars="⭐"
        text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor"
      />
    </div>
  );
}

// import { Fragment } from "react";

//  <Fragment>
//       <Testimonial
//         img={Photo1}
//         name="Juana Pérez"
//         stars=""
//         text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor"
//  />

export default App;
