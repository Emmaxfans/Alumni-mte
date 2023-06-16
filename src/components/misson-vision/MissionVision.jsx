import './MissionVision.css'
import rectangle from '../../assets/images/Mission/Rectangle 7.PNG'

export const MissionVision = () => {
    return (
        <>
            <div className='mv'>
                <h1>Mission & Vision</h1>

                <section className='mv__section'>
                    <div className='section__container'>
                        <div className='mission1'>
                            <h3>Mission</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Pretium ac adipiscing nunc urna neque sagittis leo. Quis aliquet porta congue mauris vitae. Tristique vulputate pharetra cursus aenean pellentesque laoreet condimentum. Tellus. Lorem ipsum dolor sit amet consectetur. Pretium ac adipiscing nunc urna neque sagittis leo. Quis aliquet porta congue mauris vitae. Tristique vulputate pharetra cursus aenean pellentesque laoreet condimentum. Tellus.</p>
                        </div>
                        <div className='mission2'>
                            <h3>Vision</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Pretium ac adipiscing nunc urna neque sagittis leo. Quis aliquet porta congue mauris vitae. Tristique vulputate pharetra cursus aenean pellentesque laoreet condimentum. Tellus. Lorem ipsum dolor sit amet consectetur. Pretium ac adipiscing nunc urna neque sagittis leo. Quis aliquet porta congue mauris vitae. Tristique vulputate pharetra cursus aenean pellentesque laoreet condimentum. Tellus.</p>
                        </div>
                    </div>

                    <div className='section__container'>
                        <div className='mv__section1'>
                            <div className='mission3'>
                                <img src={rectangle} alt='Mission-line' />
                            </div>

                            <div className='mission3'>
                                <div className='total'>
                                    <h4>Total</h4>
                                    <h5>total paragraph</h5>
                                </div>
                                <div className='total'>
                                    <h4>Total</h4>
                                    <h5>total paragraph</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
