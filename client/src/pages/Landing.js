import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby offal blackbird spyplane butcher, gentrify selvage narwhal
            irony yes plz XOXO seitan swag copper mug meh tumeric. Occupy fixie
            brunch, PBR&B single-origin coffee celiac cold-pressed. You probably
            haven't heard of them hexagon celiac humblebrag flannel, ramps
            adaptogen affogato mustache Brooklyn.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
