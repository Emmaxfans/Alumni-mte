import './MissionVision.css'
import vline from '../../assets/images/Mission/vline.png'

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

                    <div className='mission3'>
                                <img src={vline} alt='Mission-line' />
                            </div>

                    <div className='section__container1'>
                        
                    {/* <div className='mission4'> */}
                                <div className='total1'>
                                    <h4>Total</h4>
                                    <p>total paragraph</p>
                                </div>
                                <div className='total2'>
                                    <h4>Total</h4>
                                    <p>total paragraph</p>
                                </div>
                    </div>
                </section>
            </div>
        </>
    )
}
