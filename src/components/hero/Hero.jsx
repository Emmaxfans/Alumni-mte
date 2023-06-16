import Nav from "../nav/Nav"
import "./hero.css"

const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className="hero__bg">
      <Nav/>
      <div className="hero__div">
      <h1>Lorem ipsum dolor <br/> sit amet consectetur. Quam  </h1>
      <button className="">Register</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default Hero