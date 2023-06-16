import './NewsEvent.css'

// Images
import hand from '../../assets/images/news & event/hand.png'
import engine from '../../assets/images/news & event/engine.png'

export const NewsEvent = () => {
    return (
        <>
            <div className='news__event'>
                <h1>News & Event</h1>

                <section className="features1">
                    <div className="feature-container">
                        <img src={hand} alt="Flexbox Feature" />
                        <h2>Event Title</h2>
                        <p>This pen contains use of flexbox for the headline and feature section! We use it in our mobile navbar and show the power of mixing css grid and flexbox.</p>
                    </div>
                    <div className="feature-container">
                        <img src={engine} alt="Flexbox Feature" />
                        <h2>Event Title</h2>
                        <p>While flexbox is used for the the mobile navbar, CSS grid is used for the desktop navbar showing many ways we can use both.</p>
                    </div>
                    <div className="feature-container">
                        <img src={engine} alt="Flexbox Feature" />
                        <h2>Event Title</h2>
                        <p>This pen contains basic html to setup the page to display the responsive navbar.</p>
                    </div>
                </section>
            </div>
        </>
    )
}
