import './Subscribe.css'
import subscribe from '../../assets/images/subscribe/subscribe1.png'

const Subscribe = () => {
    return (
        <>
            <div className='subscribe'>
                <div>
                    <img src={subscribe} alt='subscribe-image' />
                </div>

                <div>
                    <h1>Follow our news</h1>
                    <p>Stay in touch with us always and subscribe to news and promotion from our association</p>

                    <form className='subscribe__form'>
                        <div>
                            <input type='email' name='subscribe' placeholder='youremail@example.com' />
                            <button type='submit'>SUBSCRIBE</button>
                        </div>
                        <hr />
                    </form>
                </div>

            </div>
            <div className='subscribe__bg'>
                <p>All rights reserved.  © 2023</p>
            </div>
        </>
    )
}

export default Subscribe