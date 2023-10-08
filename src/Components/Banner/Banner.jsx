const Banner = () => {
    return (
        <div>
            <div className="container mx-auto px-5">
                <div className="carousel w-full rounded-xl">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/4PGFMkZ/background-2.png)' }}>
                            <div className="hero-overlay bg-opacity-80"></div>
                            <div className="hero-content text-center text-neutral-content py-28 md:py-44">
                                <div className="max-w-md lg:max-w-2xl">
                                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">FestCon <span className="text-yellow-500">Management</span> at Your Service</h1>
                                    <p className="mb-5 text-white">From concept to applause, FestCon Management conducts remarkable festivals. Our team brings precision, passion, and expertise to every beat, ensuring your festival is a resounding success.</p>
                                    <button className="btn btn-warning text-white">Get Started</button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">

                        <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/N75LcWr/background-3.png)' }}>
                            <div className="hero-overlay bg-opacity-80"></div>
                            <div className="hero-content text-center text-neutral-content py-28 md:py-44">
                                <div className="max-w-md lg:max-w-2xl">
                                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">FestCon <span className="text-yellow-500">Management</span> Takes the Spotlight</h1>
                                    <p className="mb-5 text-white">Experience the crescendo of success! FestCon Management orchestrates seamless festivals, finely tuned to perfection. Let us be the conductor of your musical event and make it a symphony of memories.</p>
                                    <button className="btn btn-warning text-white">Get Started</button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">

                        <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/Qvktjs7/background-1.png)' }}>
                            <div className="hero-overlay bg-opacity-80"></div>
                            <div className="hero-content text-center text-neutral-content py-28 md:py-44">
                                <div className="max-w-md lg:max-w-2xl">
                                    <h1 className="mb-5 text-3xl lg:text-5xl font-bold text-white">Where <span className="text-yellow-500">Vision Meets</span> Vibrant</h1>
                                    <p className="mb-5 text-white">Bringing your festival dreams to life! FestCon Management offers expert event orchestration for music festivals that resonate and leave a lasting beat in the hearts of attendees.</p>
                                    <button className="btn btn-warning text-white">Get Started</button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;