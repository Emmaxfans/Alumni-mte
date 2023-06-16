import Hero from "../../components/hero/Hero";
import { MissionVision } from "../../components/misson-vision/MissionVision";
import { NewsEvent } from "../../components/new-event/NewsEvent";
import "./landing.css";

const Landing = () => {
  return (
    <>
    <Hero />
    <MissionVision />
    <NewsEvent />
    {/* <Body /> */}
    </>
  )
}

export default Landing