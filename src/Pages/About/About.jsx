import image3 from '../../assets/images/3.png';
import image4 from '../../assets/images/dj.png';
import image5 from '../../assets/images/image-6.png';
import { GiChemicalBolt } from 'react-icons/gi';


const About = () => {
    return (
        <div className="bg-slate-950">

            <div className="hero " style={{ backgroundImage: 'url(https://i.ibb.co/N75LcWr/background-3.png)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content py-28 md:py-28">
                    <div className="max-w-md lg:max-w-3xl">
                        <div className="flex gap-3 justify-center">
                            <div>
                                <GiChemicalBolt className="text-2xl text-amber-600"></GiChemicalBolt>
                            </div>
                            <p className="mb-3">About Us</p>
                        </div>
                        <h2 className="text-3xl lg:text-5xl text-white mb-5 text-center font-bold">About <span className="text-amber-600">FestCon</span> Management</h2>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-5 py-20">
                <div className='grid lg:grid-cols-2 gap-10'>
                    <div className='col-span-1 grid grid-cols-4 gap-5'>
                        <div className='col-span-2'>
                            <img className='w-full rounded-2xl mb-5' src={image3} alt="" />
                            <img className='w-full rounded-2xl' src={image5} alt="" />
                        </div>
                        <div className='col-span-2'>
                            <img className='rounded-2xl w-full h-full' src={image4} alt="" />
                        </div>
                    </div>

                    <div className='col-span-1 flex items-center'>
                        <div>
                            <h2 className="text-3xl lg:text-5xl text-white mb-5 text-center font-bold">About <span className="text-amber-600 mb-8">FestCon</span>  Management</h2>
                            <p className="text-white text-center">Welcome to FestCon Management, your premier destination for a harmonious blend of creativity and precision in music event management. We are passionate about curating unforgettable musical experiences that resonate with your soul. With years of expertise and an unyielding love for music, we orchestrate events that strike the perfect chord between artistry and seamless execution. Join us on a musical journey like no other, where every beat is a celebration of the art and every event a symphony of unforgettable memories. Let the music play, and let FestCon Management be your conductor in the world of melodies.</p>
                        </div>
                    </div>
                </div>
            </div>


            <section className="bg-slate-900 py-20 text-white">
                <div className="container mx-auto px-5">
                    <div className="hero py-44 rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/KypK7F9/cheering-crowd-at-a-concert.webp)' }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-center">
                            <div className="w-4/5 lg:w-full text-white">
                                <div className="flex gap-3 justify-center">
                                    <div>
                                        <GiChemicalBolt className="text-2xl text-amber-600"></GiChemicalBolt>
                                    </div>
                                    <p className="mb-3 text-white">About The Event</p>
                                </div>
                                <h1 className="mb-5 text-3xl lg:text-4xl font-bold">Have Not Booked Your Seat Yet <br /> Get Ticket Now</h1>
                                <button className="btn bg-amber-600 border-0 text-white p-1 px-8 rounded-3xl hover:bg-white hover:border-0 hover:text-amber-600 mt-6">Purchase Ticket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;