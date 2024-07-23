import { useEffect } from "react";
import HeroImage from "../../common/heroImage/HeroImage";
import Mobiliario from "./mobiliario/Mobiliario";
import Proyectos from "./proyectos/Proyectos";



const Home = () => {
  const heroText = "Arquitectura y diseño interior";

  //be redirected to top of screen when click log in button in footer
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <HeroImage
        imgUrl={"src/images/heroDesktop1.PNG"}
        text={heroText}
        button={true}
      />
      <Mobiliario />
      <Proyectos />
    </div>
  );
};

export default Home;
