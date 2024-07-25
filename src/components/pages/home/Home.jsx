import { useEffect } from "react";
import HeroImage from "../../common/heroImage/HeroImage";
import Proyectos from "./proyectos/Proyectos";



const Home = () => {
  const heroText = true;

  //be redirected to top of screen when click log in button in footer
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <HeroImage
        imgUrl={"src/assets/Mache.jpg"}
        text={heroText}
        button={true}
      />
      <Proyectos />
    </div>
  );
};

export default Home;
