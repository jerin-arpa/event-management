const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/6rF2tbf/IMG-20231007-WA0003.jpg)' }}>
                        <div className="hero-overlay bg-opacity-70 py-72"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="w-2/3 lg:w-2/4 text-white">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">FestCon Management at Your Service</h1>
                                <p className="mb-5">From concept to applause, FestCon Management conducts remarkable festivals. Our team brings precision, passion, and expertise to every beat, ensuring your festival is a resounding success.</p>
                                <button className="btn btn-warning text-white">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-black text-white border-0">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-black text-white border-0">❯</a>
                    </div>
                </div>


                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/R3rphF5/IMG-20231007-WA0001.jpg)' }}>
                        <div className="hero-overlay bg-opacity-70 py-72"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="w-2/3 lg:w-2/4 text-white">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">FestCon Management Takes the Spotlight</h1>
                                <p className="mb-5">Experience the crescendo of success! FestCon Management orchestrates seamless festivals, finely tuned to perfection. Let us be the conductor of your musical event and make it a symphony of memories.</p>
                                <button className="btn btn-warning text-white">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-black text-white border-0">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-black text-white border-0">❯</a>
                    </div>
                </div>


                <div id="slide3" className="carousel-item relative w-full">

                    <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/MGzxKTF/IMG-20231007-WA0000.jpg)' }}>
                        <div className="hero-overlay bg-opacity-70 py-72"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="w-2/3 lg:w-2/4 text-white">
                                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Where Vision Meets Vibrant</h1>
                                <p className="mb-5">Bringing your festival dreams to life! FestCon Management offers expert event orchestration for music festivals that resonate and leave a lasting beat in the hearts of attendees.</p>
                                <button className="btn btn-warning text-white">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-black text-white border-0">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-black text-white border-0">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;