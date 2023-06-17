import Hero from "../../components/hero/Hero";
import { MissionVision } from "../../components/misson-vision/MissionVision";
import { NewsEvent } from "../../components/new-event/NewsEvent";
import Subscribe from "../../components/subscribe-section/Subscribe";
import "./landing.css";

const Landing = () => {
  return (
    <>
    <Hero />
    <MissionVision />
    <NewsEvent />
    <Subscribe />
    {/* <Body /> */}
    </>
  )
}

export default Landing