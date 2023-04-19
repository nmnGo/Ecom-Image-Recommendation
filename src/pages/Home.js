import React from 'react'
import home_1 from "../images/home_1.jpg"
import home_2 from "../images/home_2.webp"
import home_3 from "../images/home_3.jfif"
const Home = () => {
    return (
        <div>
            <div className="my-5 p-3">
                <div className='container d-flex align-items-center justify-content-between'>
                    <div>
                        <h1>Play with images !</h1>
                        <h2>With AI as a tool</h2>
                    </div>
                    <div>
                        <img src={home_1}
                            style={{ maxHeight: "400px", maxHeight: "300px", borderRadius: "15px 15px 15px 15px" }}
                        />
                    </div>
                </div>
            </div>

            <div className='my-5 p-3 bg-secondary'
                style={{ color: "#f3f0ec" }}>
                <div className='container d-flex align-items-center justify-content-between'>
                    <div>
                        <img src={home_2}
                            style={{ maxHeight: "400px", maxHeight: "300px", borderRadius: "15px 15px 15px 15px" }}
                        />
                    </div>
                    <div>
                        <h1>Get images with a particular face</h1>
                        <h2>UseCases</h2>
                        <ul>
                            <li>Detecting theif at an event</li>
                            <li>Reduce time to find your image </li>
                        </ul>
                        <a href='/main'>
                            <button                             
                            className='my-3 btn border-white' 
                            style={{color:"white"}}
                            >Explore</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="my-5 p-3">
                <div className='container d-flex align-items-center justify-content-between'>
                    <div>
                        <h1>Get emotions of the faces</h1>
                        <h2>UseCases</h2>
                        <ul>
                            <li>78% accuracy of the model</li>
                            <li>Trained over 30k+ images with 7 emotion types</li>
                        </ul>
                        <a href='/emotions'>
                            <button className='my-3 btn btn-secondary'>Explore</button>
                        </a>
                    </div>
                    <div>
                        <img src={home_3}
                            style={{ maxHeight: "400px", maxHeight: "300px", borderRadius: "15px 15px 15px 15px" }}
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home