import './NewsEvent.css'

// Images
import hand from '../../assets/images/news & event/hand.png'
import engine from '../../assets/images/news & event/engine.png'

export const NewsEvent = () => {
    return (
        <>
            <div className='news__event'>
                <h1>News & Events</h1>

                <section className='news__section'>
                     <div className='feature0'>
                        <div>
                        <p>Jobs</p>
                        <p>Artificial Intelligence</p>
                        </div>

                        <div>
                        <p>Robotics</p>
                        <p>Mechatronics</p>
                        </div>

                        <div>
                        <p>Careers</p>
                        <p>Electronics</p>
                        </div>

                        <div>
                        <p>Department</p>
                        {/* <p>Artificial Intelligent</p> */}
                        </div>

                        
                    </div>

                    <div className='feature0x'>
                        <div className="features1">
                            <div className="feature-container">
                                <div>
                                    <img src={hand} alt="Flexbox Feature" />
                                    <h2>Event Title</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Pretium ac adipiscing nunc urna neque sagittis leo. Quis aliquet porta congue mauris vitae. </p>
                                    <a href='/#'>Read More</a>
                                </div>
                            </div>
                            <div className="feature-container">
                                <div>
                                    <img src={engine} alt="Flexbox Feature" />
                                    <h2>Event Title</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Pretium ac adipiscing nunc urna neque sagittis leo. Quis aliquet porta congue mauris vitae. </p>
                                    <a href='/#'>Read More</a>
                                </div>
                            </div>
                            <div className="feature-container">
                                <div>
                                    <img src={engine} alt="Flexbox Feature" />
                                    <h2>Event Title</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur. Pretium ac adipiscing nunc urna neque sagittis leo. Quis aliquet porta congue mauris vitae. </p>
                                    <a href='/#'>Read More</a>
                                </div>
                            </div>
                    </div>
                    </div>       
                </section>
            </div>
        </>
    )
}
